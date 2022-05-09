const { getAllCommits } = require("../../models/commits/commits.model");

async function httpGetAllCommits(req, res) {
  return await res.status(200).json(await getAllCommits());
}

module.exports = { httpGetAllCommits };
