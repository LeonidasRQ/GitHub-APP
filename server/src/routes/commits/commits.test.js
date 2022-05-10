const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Commits API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("Test for GET /commits", () => {
    test("It should respond with 200 status", async () => {
      await request(app)
        .get("/v1/commits")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
});
