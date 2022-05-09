const express = require("express");

const commitsRouter = require("./commits/commits.router");

const api = express.Router();

api.use("/commits", commitsRouter);

module.exports = api;
