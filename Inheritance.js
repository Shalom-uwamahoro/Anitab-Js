class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);   //it is advisable to create a method outside the constructor,
                                                                                      //and in this case we don't use the key
    }
};

const adam = new Person('Adam',30);
console.log({adam});

adam.greet();

class Student extends Person{  // extends and super go together
    constructor(name, age, school){
        super(name,age);  //is the keyword used to for a child to take the properites in parent class
        this.school = school; //this was not passed from parent we're creating a new property

    }
    profession(){
        console.log(`I am a student at ${this.school}`);
    }
};

const student = new Student('Amanda', 19, 'AkiraChix');
console.log({student});
student.profession();







