const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

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
