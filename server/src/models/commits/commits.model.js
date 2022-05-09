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

  if (response.status !== 200) {
    console.log("Problem downloading posts data");
    throw new Error("Post data download failed");
  }
}
