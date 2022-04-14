// console.log("Hello Peeps!");
// console.log("I said, " + "hello peeps!".toUpperCase());
// console.log( Math.random()*10  )
// console.log( Math.floor( Math.random()*10, 0) )

for (k = 1; k <= 3; k++) {
  for (i = 1; i <= 3; i++) console.log("   |   |   ");
  if (k < 3) console.log("-----------");
}

console.log("\n :: diff 1 :: \n");

for (k = 0; k < 3; k++) {
  for (i = 0; i < 3; i++) console.log("|   ".repeat(3).replace("|", ""));
  if (k < 2) console.log("-----------");
}

console.log("\n :: diff 2 :: \n");

xx = ("-----------\n" + ("|   ".repeat(3).replace("|", "") + "\n").repeat(3))
  .repeat(3)
  .replace("-----------\n", "");
console.log(xx);

//--------------------------------------------------
console.log("\n :: diff 3 :: \n");

xx = ("-----------\n" + "   |   |   \n".repeat(3))
  .repeat(3)
  .replace("-----------", "");
console.log(xx);

//--------------------------------------------------
console.log("\n :: diff 4 :: \n");

let items = ["   |   |   ", "-----------"];

for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 3; i++) console.log(items[0]);
  console.log(items[1]);
}
for(let i=0;i<3;i++) console.log( items[0] ) 


//--------------------------------------------------
console.log("\n :: diff 5 :: \n");


let lines = [ 
    ["   |", "   |", "   "],
    ["   |", "   |", "   "],
    ["   |", "   |", "   "],
    ["----", "----", "---"],

    ["   |", "   |", "   "],
    ["   |", "   |", "   "],
    ["   |", "   |", "   "],
    ["----", "----", "---"],

    ["   |", "   |", "   "],
    ["   |", "   |", "   "],
    ["   |", "   |", "   "],
]

console.table( lines , [0,1,2] )


//--------------------------------------------------
console.log("\n :: diff 6 :: \n");

for (k = 1; k < 12; k++) if( k%4==0 ) console.log("-----------"); else console.log("   |   |   ")


//-----------------------------------------------
console.log("\n :: experiments :: \n");

//console.log(this)
//(function(){ console.log(this) }());
// (function(){ console.log(this); }());
// console.log( global )
// console.warn( 'A warning' )
// console.error( 'this error' )
// console.error( global )

xx = "All around the world"
console.log( xx.charAt(7).toUpperCase() )

xx = "All around the world"
xx[7] = xx[7].toUpperCase()
console.log(xx )


let ii = 10;
ii = ii + 2
ii += 2
console.log( ii )

//-----------------------------------------------
console.log("\n :: experiments - if else etc :: \n");

if (1 !== '1') console.log(true);
else console.log(false);

let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") console.log('Check again');
else if (place == "Manc" && weather == "Rain") console.log('Obs');
else console.log('What, it isn\'t raining?');

switch (1){
  case 1: console.log(1);
  case 0: console.log(0);
  default: console.log('nothing');
}