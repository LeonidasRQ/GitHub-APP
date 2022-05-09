const express = require("express");

const { httpGetAllCommits } = require("./commits.controller");

const commitsRouter = express.Router();

commitsRouter.get("/", httpGetAllCommits);

module.exports = commitsRouter;
