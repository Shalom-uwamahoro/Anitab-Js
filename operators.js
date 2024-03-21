let a= 20;
let b = 30;

let add =  a+b;
console.log({add});

let subtract = a-b;
console.log({subtract});

let division = a/b;
console.log({division});

let multiply =a*b;
console.log({multiply});

let c= "20";

let looselyEqualTo= a==c;
console.log({looselyEqualTo});

//looselyEqualTo only check for the value not data type of variables

let strictlyEqualTo = a===c;
console.log({strictlyEqualTo});

//strictlyEqualTo checks for both the value and the data type of variables

let looselyNotEqualTo= a!=c;
console.log({looselyNotEqualTo});

let striclyNotEqualTo= a !==c;
console.log({striclyNotEqualTo});

a+=5;
console.log({a});
//compound operator

a--;
console.log({a});
// Decrement

a++;
console.log({a});
// Increment


/* Type of Coercion
1. Implicity it is internal; implicitly forces Js to change data type of the valu. using + or * or - signs
2. Explicity it is external */

console.log({c});
let d= +c;
console.log({d});

let e= c*1;
console.log({e});
//Implicit example

let f= Number(c);
console.log({f});
// Explivity

// String Data Type