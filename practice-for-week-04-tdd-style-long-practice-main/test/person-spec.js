const chai = require("chai");
const expect = chai.expect;
const Person  = require("../problems/person");

describe("Person", function () {
  // beforeEach

  let ironman;
  let cap;

  beforeEach(() => {
    ironman = new Person('Robert', 43);
    cap = new Person('Chris', 38);
  })


  describe("Person constructor function", function () {
    it('should have a "name" and "age" property', function () {
      expect(ironman).to.have.property("name")
      expect(cap).to.have.property("name")
      expect(ironman).to.have.property("age")
      expect(cap).to.have.property("age")
    });

    it('should set the "name" and "age" property when a new Person is created', function () {
      expect(ironman.name).to.equal("Robert")
      expect(cap.name).to.equal("Chris")
      expect(ironman.age).to.equal(43)
      expect(cap.age).to.equal(38)
    });
    describe("invoker instances functions", function () {
        it("Should say hello with sayHello function", function () {
            expect(ironman.sayHello()).to.equal(`Hello Robert`)
        })
        it("Should visit with visit function", function () {
            expect(cap.visit("Robert")).to.equal(`Chris visited Robert`)
        })
        it("Should visit with visit function", function () {
            expect(ironman.switchVisit("Chris")).to.equal(`Robert visited Chris`)
        })
        it("Should visit with visit function", function () {
            expect(ironman.update(cap)).to.equal(cap)

        })
    })

  });
})
