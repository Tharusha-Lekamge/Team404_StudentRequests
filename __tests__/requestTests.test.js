const { json } = require("express");
const { createRequest } = require("../controllers/requestController");

test("Request-1-create - Should Create a new Request with given details and return the request back", () => {
  const newReq = createRequest({ body: {} });
  expect(text).toBe("");
});
