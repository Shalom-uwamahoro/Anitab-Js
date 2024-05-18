
const personAge = (age) => {
    if (age >= 18){
        console.log("You are an adult");
    }
    else if (age >=13 && age <=18){
        console.log("You are a teenager");
    }
    else{
        console.log("You are a child");
    }
}

personAge(10);


const greeting = (dayOfTheWeek) => {
    switch (dayOfTheWeek){

        case "Monday":
            console.log("Hello Monday");
            break;
        
        case "Tuesday":
            console.log("Hello Tuesday");
            break;

        case "Wednesday":
            console.log("Hello Wednesday");
            break;

        case "Thursday":
            console.log("Hello Thursay");
            break;

        case "Friday":
            console.log("Hello Friday");
            break;

        case "Saturday":
            console.log("Hello Saturday");
            break;

        case "Sunday":
            console.log("Hello Sunday");
            break;

        default:
            console.log('Invalid day of the week')
    }

};
greeting('Wednesday')


// // If a is greater than b return 'a is greater than b' else 'a is less than b'.

function returncheck(){
    let a=5
    let b=8
    if(a>b){console.log('a is greater than b')
return 'a is greater than b'}
    else{console.log('a is less than b')
return 'a is less tha b'}
}

returncheck()
