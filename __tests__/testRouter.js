const request = require("supertest");

const db = require("../data/db-config.js");
const server = require("../server.js");

describe("server", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it('Tests are tunning with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("post /auth/register", () => {
    it("Should return 201 when a user is added", () => {
      return request(server)
        .post("/auth/register")
        .send({
          username: "test",
          password: "pass"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("should return JSON to register", () => {
      return request(server)
        .post("/auth/register")
        .send({
          username: "test",
          password: "pass"
        })
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
