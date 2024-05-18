// Creating a Constructor or a Method
function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);  
    }

};

const adam = new Person('Adam', 30);
console.log({adam});

const eve = new Person('Eve', 20);
console.log({eve});

// adding a property to an object
eve.children = ['Abel', 'Cain', 'Seth'];
console.log({eve});

// We use Protyotype to added new argument to the constructor
Person.prototype.nationality = 'Kenyan'
console.log('adam-nationality', adam.nationality);
console.log('eve-nationality', eve.nationality);

//  Note: All objects have a hidden object inside them called prototype
// It is more like a soul of a human


eve.nationality = 'Ugandan'; //Assume even has decided to change her nationality and not follow Kenyan nationality that was passed to the constructor.
console.log({eve});
console.log('eve-nationality', eve.nationality); // The system goes through the properties of the outer object before going to the prototype(inner object) that the objcet might consitst

adam.work = function(){
    console.log('I am a farmer');
}
adam.work();

eve.greet();