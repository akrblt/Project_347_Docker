const request = require("supertest");
const express = require("express");

let app;
beforeAll(() => {
  app = require("../app"); // si tu exportes express instance dans app.js
});

test("health endpoint", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("ok");
});
