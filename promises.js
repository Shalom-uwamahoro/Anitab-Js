//promises; they take in callback function as an arguments and that callback function takes in also two callbacks (resolve and reject)as arguments

const internship = false;

const ourPromise = new Promise((resolve, reject)=>{

    if(internship){
        resolve('I made it')
    }
    else{
        reject('I will not give up')
    }
});

console.log({ourPromise}); // this one would not give us valid result if our inital variable is false, thus we apply promise chaining

//Promise Chain..... implementation
ourPromise.then((response)=>{             // we added response, error later on so that whatever is in then, catch can be passed down in async function
    console.log('I will get confirmed');
})
.catch((error)=>{
    console.log('I will continue applying')
})
.finally(()=>{
    console.log('I will be a Software Engineer')
});

console.log({ourPromise});

// Async/await 

async function myAkiraChixDream(){
    try{
    await ourPromise;
}
catch{
    console.log('I will get a job one day')
}
}
myAkiraChixDream();