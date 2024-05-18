function add(num1, num2){
    const sum = num1 + num2;

    console.log({console: sum})
    return { return: sum};
}
console.log(add(2,3));
add(4,5);

//Global function can be console.log outside and inside function.

// FUNCTION EXPRESSIONS

// 1st : Expression using 'function' keyword

const substract = function(num1, num2){
    console.log(num1-num2)

};
substract(20,10);

// 2nd : Arrow Function Expression

const multiply = (num1,num2) => console.log(num1*num2);
multiply(5,6);

// IIFs

(function(){
    console.log('Hello');
}
)();

(function(a){
    console.log('Hello',a);
}
)(20);

let greet= function(){

    console.log("Hello there");
}




