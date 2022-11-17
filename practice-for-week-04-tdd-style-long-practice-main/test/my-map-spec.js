// Your code here
const chai = require("chai");
const expect = chai.expect;
const { myMap } = require("../problems/my-map");

describe("myMap function", function () {
    it("should replicate myMap", function () {
        const inputArray = [1, 2, 3];
        const callback = (value) => value * 2
        const result = myMap(inputArray, callback);
        const expected = [2, 4, 6];
        expect(result).to.eql(expected);

        //eql used for arrays for deep equal (==)
        //equal used for strict equal (===)
    });
});
