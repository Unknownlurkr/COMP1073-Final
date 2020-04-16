  // JavaScript Document

  /*
  Creating the person class-
  Using javascript class to create a constructor 
  that contains the propeties for our object:
  A constructor provides to coustomize or objects
  this is before methods can be instantiated
  the class Person has a constructor which contains the person propeties which are:
  name,age,gender,classes
  */
class Person {//Person object and properties
  constructor(name, age, gender, classes) {//Person object properties are name,age,gender,classes
    this.name; 
    this.age = age;
    this.gender = gender;
    this.classes = classes;
  }

//A greeting function that will show a greeting and the Person object property this.name
  greeting() {
    console.log(`Hi! I'm ${this.name}`); //losggedf in the console will display the greeting 
  };
//a function bye() that will display the person object name "has left the building"
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);//losggedf in the console will display bye()
  };
}

//Instaniating new people to the person object with the "new Person" creating an object instance
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//the teacher is extending off the parent class Person-teacher becomes the child class
class Teacher extends Person { 
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests); //super class to access and call functions on the parent object
    // subject and grade are specific to Teacher
    //this.last = last; to reference the teaxchers last name ?
    this.subject = subject; 
    this.grade = grade;
  }//object and grade are new proerties related to the teacher object and the super class references properties from the parent object
}

//creating a new teacher instance named Jim 
let Jim = new Teacher('Jim', 45, 'male', ['Hacking scam call centers', 'Squash'], ['info sec 101', 'Network security 202'], 'college');