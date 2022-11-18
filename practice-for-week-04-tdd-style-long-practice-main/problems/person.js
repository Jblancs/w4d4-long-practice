class Person {
  // Your code here
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello() {
    return `Hello ${this.name}`
  }
  visit(otherPerson) {
    return `${this.name} visited ${otherPerson}`
  }
  switchVisit(otherPerson) {
    return this.visit(otherPerson)
  }
  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("not object!")
    }
    if (!obj.name || !obj.age) {
      throw new TypeError("give name or age")
    }
    let newName = this.name = obj.name
    let newAge = this.age = obj.age
    
  }
  tryUpdate(obj) {

  }
  static greatAll(...obj) {
    let arr = [];
    obj.forEach(el => arr.push(sayHello(el)))
  }
}


module.exports = Person;
