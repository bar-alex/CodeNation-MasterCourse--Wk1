let coffeeOrder = [
    "Alex - Latte",
    "Ben - Pour Over",
    "Charlie - Cappuccino"
];
// Arrays are written just like lists in Python

console.log(coffeeOrder);
// Prints the array

console.log(coffeeOrder[2]);
// Prints item in index 2

coffeeOrder[1] = "Demi - Long Black";
console.log(coffeeOrder);
// Replaces index 1 then prints new array

console.log(coffeeOrder.length);
// Prints how many items are in the array

coffeeOrder.push("Milly - Water");
console.log(coffeeOrder);
// Adds an item at the end of your array

coffeeOrder.pop();
console.log(coffeeOrder);
// Removes item from the end of your array



let drinks = ['Coffee', 'Tea', 'Fanta', 'Red Bull'];

// console.log(drinks[0]);
// console.log(drinks[1]);
// console.log(drinks[2]);

for(let i=0; i<drinks.length; i++)
    console.log(drinks[i]);


// for(let i=0, flow=1; (flow = i>=drinks.length?0:flow) && i>-1; flow>0?i++:i--)
//     console.log(drinks[i]);


let multiplesTwo = [];

for(let i=0; i<20; i++)
    if (i%2==0)
        multiplesTwo.push(i);

console.log(`\nNumbers divisible by 2 between 0 and 20: ${multiplesTwo}./n`);


let age = 15;

while(age<18){
    console.log("You're a child");
    age++;
}

console.log("You're an adult!");


let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Club';

while(currentCard!='Spade'){
    console.log(currentCard);
    currentCard = cards[ Math.floor(Math.random()*4) ];
}

