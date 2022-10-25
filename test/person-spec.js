const { expect } = require('chai');
const chai = require('chai');

const Person = require('../problems/person');

// ********************************************
let person;
    let person2;

    beforeEach(() => {
        person = new Person("Mai", 32);
        person2 = new Person("Erin", 47)
    })

describe("Person class", function () {

    it('should set name and age on creation', function () {
        expect(person.name).to.exist;
        expect(person.age).to.exist;
    })
  
    it("sayHello method should return a greeting message and person's name", function () {
        expect(person.sayHello()).to.equal("Hello Mai");
    })

    it('visit method should return a string stating that this instance visited the passed-in person instance', function () {
        expect(person.visit(person2)).to.be.equal('Mai visited Erin')
    })

    it('switchVisit method should invoke visit function of the parameter and passing in current instance as argument', function () {
        expect(person2.visit(person)).to.be.equal('Erin visited Mai')
    })

    it('should have update(obj) method', function () {
        expect(person.update).to.exist;
    })
})



describe("update(obj) method", function () { 

    let notObj;
    let noPropertyObj;
    let newPerson;

    beforeEach(() => {
        notObj = "hello";
        noPropertyObj = new Person();
        newPerson = new Person("Lulu", 57)
    })

    context("Valid argument", () => {
        it('should update with new passed-in value', function () {
            person.update(newPerson);
            expect(person.name).to.be.equal(newPerson.name);
            expect(person.age).to.be.equal(newPerson.age);
        })

    })
  
    context("Invalid argument", () => {
        it('should throw an error if obj is not an object', function () {
            expect(() => person.update(notObj)).to.throw();
        })

        it('should throw an error if obj does not have name and age', function () {
            expect(() => person.update(noPropertyObj)).to.throw();
        })
    })
})

describe("tryUpdate(obj)", function () {
    let notObj;
    let noPropertyObj;
    let newPerson;

    beforeEach(() => {
        notObj = "hello";
        noPropertyObj = new Person();
        newPerson = new Person("Lulu", 57)
    })

    context("update successfully", function () {
        it('should return true', function () {
            let result = person.update(newPerson)
            expect(person.tryUpdate(result)).to.be.true;
        })
    })

    context("update not successfully", function () {
        it('should return false', function () {
            let result2 = person.update(notObj)
            expect(person.tryUpdate(result2)).to.be.false;
        })
    })
})
   
