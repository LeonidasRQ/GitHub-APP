const { getAllCommits } = require("../../models/commits/commits.model");

const { getPagination } = require("../../services/query");

async function httpGetAllCommits(req, res) {
  const { skip, limit } = getPagination(req.query);
  const commits = await getAllCommits(skip, limit);
  return await res.status(200).json(commits);
}

module.exports = { httpGetAllCommits };
