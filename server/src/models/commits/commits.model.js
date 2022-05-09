const { Octokit } = require("@octokit/core");

const commitsDB = require("./commits.mongo");

require("dotenv").config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function populateCommits() {
  console.log("Downloading commits");

  const octokit = new Octokit(GITHUB_TOKEN);
  const response = await octokit.request(
    "GET /repos/leonidasrq/GitHub-APP/commits"
  );

  const commits = response.data;

  if (response.status !== 200) {
    console.log("Problem downloading posts data");
    throw new Error("Post data download failed");
  }

  for (const commit of commits) {
    const newCommit = {
      sha: commit["sha"],
      authorName: commit["commit"]["author"]["name"],
      authorEmail: commit["commit"]["author"]["email"],
      creationDate: commit["commit"]["author"]["date"],
      commitMessage: commit["commit"]["message"],
    };

    const commitExists = await exitsCommitWithSha(newCommit.sha);
    if (!commitExists) {
      console.log(
        `New commit retreived - sha: ${newCommit.sha} creation date: ${newCommit.creationDate}`
      );
      await saveCommit(newCommit);
    }
  }
}

async function findCommit(filter) {
  return await commitsDB.findOne(filter);
}

async function exitsCommitWithSha(sha) {
  return await findCommit({
    sha: sha,
  });
}

async function getAllCommits(skip, limit) {
  return await commitsDB
    .find({}, { _id: 0, __v: 0 })
    .sort({ creationDate: 1 })
    .skip(skip)
    .limit(limit);
}

async function saveCommit(commit) {
  await commitsDB.findOneAndUpdate(
    {
      sha: commit.sha,
    },
    commit,
    {
      upsert: true,
    }
  );
}

module.exports = { populateCommits, getAllCommits, exitsCommitWithSha };
