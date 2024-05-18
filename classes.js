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



class weatherForacast{
    constructor(){
this.weatherData = {};
    }
    addCities(cityName,humidity,temp,windspeed) {
let cityData = {"humidity":humidity, "temp":temp,"windspeed":windspeed};
this.weatherData[cityName] = cityData;
    }
}
const city = new weatherForacast()
city.addCities("nairobi",20,25,10.2)
city.addCities("kigali",20,25,10.2)
console.log(city);



students = [
    {name: 'Ritha', class:'Anitab', score: 60},
    {name: 'Martha', class:'Lovelace', score: 50},
    {name: 'Meda', class:'Adalab', score: 80}
]

function arr_obj(students){
    let totalScore = 0
    let numberOfStudent = students.length
    students.forEach(student =>{
        totalScore+=student.score
    })
    let average = totalScore/numberOfStudent
    console.log(average)
}

arr_obj(students);


var shally= "Shalom"
 
function reverseString(shally){
    newStr= shally.split('').reverse().join('')
    console.log(newStr)
}
reverseString(shally);

let sentence = 'i am a student'
function capitalized(sentence){
    return sentence.split(' ').map(word => word.charAt(0).uppercase() + word.slice(1).join(' '))
    
}
console.log(sentence)
