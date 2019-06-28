// Setup consructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
        description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

// Traveller -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia
// 2. Hi. I am Andrew Mead
class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const me  = new Traveller ('Leopold Kwok', 26, 'Philapdelhia');
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, 'Nowwhere');
console.log(other.getGreeting());