const request = require("supertest");
const app = require("../app");

describe("API tests", () => {
  it("should return health ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
