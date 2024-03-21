let fruits= ["Mango", "Banana", "Orange"];
let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

console.log('fruits' ,fruits[1]);
// used to find an item in array by using its index position

fruits[2] ='Kiwi';
console.log({fruits})
// used to put an item in array at a particlular index

console.log('last item', fruits[fruits.length -1]); 
// used to find the last item in an array 

// N.B!!!  console.log('last item', fruits[-1]); this doesn't work in Js

let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});
// another way to get last item in an array

let addEnd = fruits.push("paupaw");
console.log({fruits});
// puts item at the end of array

let addStart = fruits.unshift("Pineaple");
console.log({fruits});


let removeEnd = fruits.pop();
console.log({fruits});
// It removes the last item in an array

let removeStart = fruits.shift();
console.log({fruits});


let items = [20,30,40,50,60];
let add = items.reduce((acc, curr)=>acc + curr);
console.log({add});
// the above is used to look for the sum of items in an array. (acc= accumulator, curr= current value)= accumulation

let multiply = items.map(item=> item*2);
console.log({multiply});
// The above is map method that is used for mutliplying items in an array . item=single item, it is more like block element used for looping in Kotlin and Python

let square = items.forEach(item => item*item);
console.log({square});
//  The above gives "undefined" as a result

let square2 = items.forEach(item =>{
    const multiply = item*item;
console.log({multiply}) });
// This will remove undefined situation and give you square of every item; however not in an array

let square3 = []
 items.forEach(item =>{
    const multiply = item*item;
    console.log({multiply});
    square3.push(multiply)
 });
 console.log({square3});
//  This method brings the result of squared items as an array!!!