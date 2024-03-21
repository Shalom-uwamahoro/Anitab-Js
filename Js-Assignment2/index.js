//Extract the last four characters from the string below;"extravaganza"

let string= "extravaganza";
let sub_str= string.substring(8,12);
console.log({sub_str});

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const text= "eat";
const index= 4;

console.log([food.slice(4, index), text, food.slice(index)].join(''));

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"


const story= "The quick brown fox jumps over the lazy dog";
console.log(story.split("the").length - 1);
console.log(story.split("brown").length - 1);

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const pos1 = string1.search("are");
console.log({pos1});

const string2 = "The child was sitting on the table before it fell";
const pos2 = string2.search("sitting");
console.log({pos2});

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

let word1= "wonderful";
let wordUpperCase= word1.toUpperCase();
console.log({wordUpperCase});

let word2=  "amazing";
let wordLowerCase= word2.toLowerCase();
console.log({wordLowerCase});

let word3= "UndERneath";
let word3LowerCase= word3.toLowerCase();
console.log({word3LowerCase});

let word4= "A wonderful world"
let titleCase= " ";
word4.split(" ").forEach(word => {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";});
    console.log(titleCase);


