const chai = require("chai");
const supertest = require("supertest");
const app = require("../server");
var uuid = require("uuid");
let chaiHttp = require("chai-http");

global.uuid = uuid;
global.expect = chai.expect;
global.request = supertest(app);

// Assertion style
let should = chai.should();
chai.use(chaiHttp);

describe("Request Controller", () => {
  // Get route
  describe("GET /request", () => {
    it("it should GET all requests", (done) => {
      chai
        .request(app)
        .get("/api/v1/requests")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  // Post route
});
