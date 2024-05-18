const multiply = (numbers) => {
    let newArray = [];

    for (let i =0; i<numbers.length; i++){
        const multiplyByTwo = numbers [i] * 2;
        newArray.push(multiplyByTwo);
    }
    return newArray;
    // when returning we should declare array outside for loop

};

console.log(multiply([2,4,5,6,7]));

const totalSum = (arrayNums) => {
    let sum = 0;
    for(let num of arrayNums){     // For .. of traversaling
        sum += num
    }
    return sum;
}

console.log(totalSum([3,4,5,6,7,8]));


// Note break helps stop a loop, and continue is used to skip at a particular condition


const leg = true;
const kickBall = (leg) =>{
while (leg){
    console.log('kic the ball');
    break;   // break helps stop a loop, and you place it anywhere you want to stop the loop from
    
}
}
kickBall(leg);

// while and break or continue traversaling

const checkLeg = (leg) => {
    do {
        console.log('You have a lege; kick a ball');
    }
    while(leg)
}

checkLeg(false);

// break and continue can be used here too
