# GitHub Fullstack Application

This web application uses the GitHub API for fetching all the commits from its own repository. It uses a cron job for fetching new commits every hour. It will be executed every hour at the 59th minute.

## Running Locally

### Pre-requisites for Running Locally

- Its important to create shared-cluster-database at the [MongoDB Atlas Website](https://www.mongodb.com/atlas/database)

- Once the database is created you must create a new **_.env_** file with the following parameters:

```bash
  PORT=8000
  MONGO_URL="<paste the mongo URL that the MongoDB Atlas Platform gave you>"
  GITHUB_TOKEN="<paste the github access token that you generated>"
  GITHUB_REPOSITORY_NAME="<write the repository name whose commits you´re interested in>"
  GITHUB_REPOSITORY_OWNER="write the name of the owner of the repository"
```

- For more information on how to generate the GitHub Access Token, you can access this GitHub document on [Creating a Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- For more information on how to use the GitHub API for listing a repository's commit history, you can access this [document](https://docs.github.com/en/rest/commits/commits)

### Running Locally

#### Install dependencies

```bash
  npm run install
```

#### Start the application on development mode

```bash
  npm run deploy
```

#### Run tests

```bash
  npm run test
```

## Running Dockerized Application on your Machine

### Pre-requisites

- Having Docker installed in your machine

### Running Dockerized Application

```bash
  docker run --restart=always -p 8000:8000 leonidasrq/github-project
```

## Check Production Environment on AWS

- You can access to the EC2 instance on AWS through this [link](http://50.17.27.250:8000/)
