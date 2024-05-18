const cup= {
    color:'red',
    shape:'circular',
    weight:'50grams',
    size: 'medium',
    description: {
        drinkType: 'tea',
        temperature: 'hot'
    },
    drink: function(){
        console.log('use me to drink');
        console.log(`The main purpose of this cup is to drink ${cup.description.temperature} ${cup.description.drinkType}`); // we use literal quotes
    }
// You can introduce a method using arrow function too, however 'this' can't be used again bcs it changes to globalThis
    // drink:() =>{
    //     console.log('use me to drink');
    //     console.log(`The main purpose of this cup is to drink ${cup.description.temperature} ${cup.description.drinkType}`);
    // }
   
};  // the keys can be in quotations 'color' or not because Js knows you are creating an object
console.log({color: cup.color});
console.log({'size': cup.size});
console.log({'temperature': cup.description.temperature});

cup.material= 'cermaic';   //to create a new property but it won't be added to original print
console.log({cup});

cup.color='green'  // to change a property in an object
console.log({color: cup.color});

delete cup.material;
console.log({material: cup.material});

cup.drink(); // we did call it with console.log(cup.drink()) because it is a function we will be calling it twice

const keys =Object.keys(cup);
console.log({keys});

const values =Object.values(cup);
console.log({values});

// iterating through an object

Object.keys(cup).forEach(item =>{
    console.log({key:item, values: cup[item]});
})


