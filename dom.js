const documentElement = document.documentElement;
console.log({documentElement});

console.log('body', document.body);
console.log('head', document.head);

// This is only for us to read the document(DOM) that is what .getElement... does!!!
const container = document.getElementById('container');
console.log('parent', container.parentElement);
console.log('previousSibling', container.previousElementSibling);
console.log('nextSibling', container.nextElementSibling);
console.log('children', container.children);
console.log('firstChild', container.firstElementChild);
console.log('lastChild', container.lastElementChild);

//UPDATE DOM
const heading = document.getElementById('container-heading');
heading.innerHTML = "Introduction to DOM Manipulation";
heading.style.color = 'purple';

//CREATE DOM, document is the one which has all properties that allow use to manipu;ate our html file

const newChild = document.createElement('p');                            //assume you're requesting ur ancestor to help you produce a child
container.appendChild(newChild);                                          
newChild.innerHTML = 'I am a new child';                                   //you adopting the create child and annoncing to the world
newChild.setAttribute('class','container-next-text');

// DELETE

const lastChild = document.getElementById('container-text');
lastChild.remove();

// Style the button

const button = document.getElementById('button');
button.style.border = 'none';
button.style.padding = "10px 15px";
button.style.borderRadius = "5px";
button.style.background = "#4169E1";
button.style.cursor = "pointer";
button.style.color = "#ffffff";
button.style.fontSize = "20px"

button.addEventListener('click',function(){
    button.innerHTML = "Clicked!";
    button.style.background = "#00FF00"
})
