class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello () {
    return `Hello ${this.name}`
  }

  visit (otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit (otherPerson) {
    return otherPerson.visit(this)
  }
  
  update (obj) {
    if (typeof obj !== 'object') {
      throw TypeError();
    } else if (obj.name === undefined && obj.age === undefined) {
      throw TypeError();
    }
    return this.name = obj.name,this.age = obj.age;
  }

  tryUpdate = (obj) => {
    if (this.update(obj) === Error) {
      return false
    } else {
    return true
    };
  }
}



let person = new Person("Mai", 32);
let noPropertyObj = new Person();
console.log(person.update(noPropertyObj));

// ******************************
module.exports = Person;
