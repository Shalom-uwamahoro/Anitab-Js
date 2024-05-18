function greet(userName, callback){
     console.log('Hello there ${userName}')
     callback();
};

function intro(){
    console.log('This is me')
}

greet('Hellen', intro)

//SetTimeOut()    Read on clear Timeout, clear Intervals for yourself not wait to be taught

setTimeout(intro, 2000);
setInterval(function(){
    console.log('This is interval')
},3000);
