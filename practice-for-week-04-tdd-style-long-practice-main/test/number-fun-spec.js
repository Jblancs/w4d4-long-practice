// Your code here
const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree function", function () {
  it("should return number 3", function () {
    const num = 3;
    const result = returnsThree(num);
    const expected = 3;
    expect(result).to.equal(expected);
  });
});

describe("reciprocal function", function () {
    it("should return reciprocal of n", function () {
      const num = 4;
      if (num < 1 || num > 1000000) {
        throw new TypeError("your number should be less than 100000 and more than 1")
      }
      const result = reciprocal(num);
      const expected = 0.25;
      expect(result).to.equal(expected);
    });
  });
