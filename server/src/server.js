const http = require("http");

require("dotenv").config();

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { populateCommits } = require("./models/commits/commits.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await populateCommits();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
