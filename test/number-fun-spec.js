const chai = require('chai');
const expect = chai.expect;

const {returnsThree, reciprocal} = require('../problems/number-fun')

describe("returnsThree function", () =>{
    it("should return number 3", () => {
        expect(returnsThree()).to.equal(3);
    });
});


describe("reciprocal(num)", () => {

    context("Valid Arguments", () => {
        it("should return the reciprocal of that number", () => {
            expect(reciprocal(200)).to.be.equal(1 / 200)
            expect(reciprocal(1200)).to.be.equal(1 / 1200)
        });
    })
  
    context("Invalid Arguments", () => {
        it("should throw an error", () => {
            expect(() => reciprocal(0.1)).to.throw(TypeError);
            expect(() => reciprocal(1200400)).to.throw(TypeError);
        });
    })
    
});
