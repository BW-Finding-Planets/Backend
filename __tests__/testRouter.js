const request = require("supertest");

const db = require("../data/db-config.js");
const server = require("../server.js");

describe("server", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it('Testa are tunning with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
