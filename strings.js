// Strings as Data Type

let a= 'Hello';
let b= "World";
let c=`There`;

let length= a.length;
console.log({length});

console.log('item', a[2]); //index notation; looking for an item in a particular index position. It is not obligatory to use item word in console brack( it is just for clarification)
console.log('index', a.indexOf('e')); // looking for index  number of an item . Note: It is not mandatory to use index word in console brackets


// `` signs used on C are called template literals
//Strings are primitive data type; they obejects bcs they have properties and methods
// we count lenght of string start with 1 and the indexing of character starting with 0



let greet = a +" "+ b; // You add strings btn + signs to add space btn words
console.log({ greet });

let salamu= ` ${a} ${b}. I love code!`; // string concatenation using template literal and $ sign 
console.log({salamu});




