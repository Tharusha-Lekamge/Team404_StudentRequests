const chai = require("chai");
const { chaiHttp } = require("chai");
const server = require("../server");

// Assertion style
chai.should();
chai.use(chaiHttp);

describe("Request Controller", () => {
  // Get route
  describe("GET /api/v1/requests");

  // Post route
});
