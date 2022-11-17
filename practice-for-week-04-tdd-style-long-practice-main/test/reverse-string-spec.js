// Your code here
const chai = require("chai");
const expect = chai.expect;
const { reverseString } = require("../problems/reverse-string")

describe("reverseString function", function () {
    it("should return string in reverse", function () {
        const word = 'fun'
        const result = reverseString(word)
        const expected = 'nuf'
        expect(result).to.equal(expected)
    })
})
