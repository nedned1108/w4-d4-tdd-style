const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string')

let string = "fun";

describe("reverseString function",() => {
    it("should return a reversed word",() => {
      expect(reverseString(string)).to.equal('nuf');
    });

    it("should throw an error if string is not type of String",() => {
        const array = [12];
        const object = {i: 1, am: "asd"}

        expect(() => reverseString(array)).to.throw(Error);
        expect(() => reverseString(object)).to.throw(Error);

    });
    
});
