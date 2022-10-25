const chai = require('chai')
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;

const myMap = require('../problems/my-map')
// **********************************************

describe("myMap function", () => {
    let arr = [];
    const double = (el) => el * 2;

    beforeEach(() => {
        arr = [1, 2, 3];
    })
    
    it("should return a new array", () => {
        expect(myMap(arr, double)).to.eql([2, 4, 6])
    })

    it("should not mutate the passed-in array argument", () => {
        expect(arr).to.equal(arr)
    })

    it("should not call the built-in Array.map", () => {
        const spyOn = chai.spy.on(arr, 'map');
        myMap(arr, double);
        expect(spyOn).have.not.been.called();
    })

    it("should call the callback for each element in the array", () => {
        const spy = chai.spy(double);
        myMap(arr, spy);
        expect(spy).have.been.called.exactly(3)
    })

})
