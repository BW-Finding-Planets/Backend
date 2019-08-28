const request = require("supertest");
const db = require("../data/db-config.js");
const server = require("../server.js");

describe("server", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it('tests are tunning with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("POST /auth/register", () => {
    it("should return 201 when a user is added", () => {
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
  describe("POST /auth/login", () => {
    it("should return 200 when a user is logging in", async () => {
      const user = {
        username: "admin",
        password: "password"
      };

      await request(server)
        .post("/auth/register")
        .send(user);

      return request(server)
        .post("/auth/login")
        .send(user)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON to login", () => {
      return request(server)
        .post("/auth/login")
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
