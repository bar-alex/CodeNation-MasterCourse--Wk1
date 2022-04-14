//------------------------------------
console.log("\n :: activity:arr 01 :: \n");

let listSongs = [
     "Weapon of choice - Fatboy Slim"
    ,"Sound of silence - Disturbed"
    ,"In hell I'll be in good company - The Dead South"
]

for(let it of listSongs)
    console.log(it);

listSongs.push("Carry On Wayward Son - Kansas")
listSongs.push("Mah Na Mah Na - Piero Umiliani")

console.log(listSongs);

listSongs.pop()

console.log(listSongs);


//------------------------------------
console.log("\n :: activity:arr 02 :: \n");

let listNum = [1,3,5,7,9,10]
let listBitPwr = listNum.map( it => 2**it )

console.log(listNum);
console.log(listBitPwr);


//------------------------------------
console.log("\n :: activity:loops 01 :: \n");

let listMovies = [
      "GhostBusters"
    , "Time traveler's wife"
    , "Spiderman - the new and improved"
    , "How to code the Matrix"
    , "The longest second ever!"
]

listMovies.push( "How I've changed my mind", "The day the earth stood still" )

let idx = 0
while (idx < listMovies.length){
    console.log(listMovies[idx]);
    idx++
}


//------------------------------------
console.log("\n :: activity:loops 02 :: \n");

//let listNums = Array.from({length:6},(v,k)=>k+1)
//let listNumsFifty = Array.from(Array(6).keys())

let listNumsSix = [...Array(6).keys()]
let randNumsSix = listNumsSix.map( x => Math.floor(Math.random()*50) )
console.log(randNumsSix);

// one line with arrays
let listRandOneLine = [...Array(6).keys()].map( x => Math.floor(Math.random()*50) )
console.log(listRandOneLine);

//in a loop
for(let i=1; i<7; i++) 
    console.log( Math.floor(Math.random()*50) );


//------------------------------------
console.log("\n :: activity:loops 03 :: \n");

let listZeroNine = [...Array(10).keys()]
// console.log(listZeroNine);
// console.log(listZeroNine.reverse());
// for(let it of listZeroNine) console.log(it);
for(let it of listZeroNine.reverse()) console.log(it);

// reversed array of 1..10
let listZeroNineReversed = [...Array(10).keys()].reverse()
console.log( listZeroNineReversed );


//------------------------------------
console.log("\n :: activity:loops 04 :: \n");

let listMoviesGhosty = [
     "Lambada - the latest craze"
    ,"Don't look up" 

    ,"Email gaming in the age of quantum computing"
    ,"Ghostbusters"
    ,"Who you're gonna call? The cable guy!"
]

for(it of listMoviesGhosty)
    console.log( it );

if (listMoviesGhosty[2].toLowerCase() == "ghostbusters")
    console.log("\nYay! It's Ghostbusters");
else 
    console.log("\nBoo! We want Ghostbusters");


//------------------------------------
console.log("\n :: activity:loops 05 :: \n");

// one line with arrays
let listRandSix = [...Array(6).keys()].map( x => Math.floor(Math.random()*30) )
console.log(listRandSix,'\n');

// prints number and divisible / not divisible 
listRandSix.map( x => 
    console.log( x + (x%7==0 ? " - Divisible by 7" : " - Not divisible by 7") ) )

console.log()
// with loops
for(i=1;i<6;i++){
    let num = Math.floor(Math.random()*30)
    if(num % 7 == 0)
      console.log(num+' - divisible by 7')
    else 
      console.log(num+' - not divisible by 7')
  }


//------------------------------------
console.log("\n :: activity:loops 06 :: \n");

const bobsFollowers = [
    "Joe"
    , "Michael"
    , "Elizabeth"
    , "Cruela"
]
const hannahsFollowers = [
    "Aaron"
    , "Elizabeth"
    , "Alex"
    , "Joe"
]

for(let fb of bobsFollowers)
    for(let fh of hannahsFollowers)
        if(fb.toLowerCase() == fh.toLowerCase())
            console.log(`Common follower: ${fb}`);


//------------------------------------
console.log("\n :: activity:loops 06 :: \n");

// all for loops allow us to repeat a loop for a predefined number of times, more or less (ex. of less)
for(let i=0;i<5;i++) 
    console.log(i);

console.log()
for(let it of [11,22,33,44]) 
    console.log(it);

console.log()
for(let it in {name:"Julia", age:21}) 
    console.log(it);

console.log()
// this one runs forever - you can exit with break
for(let i=10;true;i--)
    if(i<=5) break; 
    else console.log(i);


// while allows us to run a loop while a condition is true, 
//      the pro is that it will test the condition before executing the block of code
//      the con (for me) is that most of the time you have to setup the vars used in the condition before the while loop
console.log()
let childFlag = true
while(childFlag){
    const num = Math.floor(Math.random()*30)
    console.log(`You\'re ${num} years old, ${ num>=20?'an adult':'a child' }`);
    childFlag = num < 20
}

// do while loops will run the block of code at least once before checking the condition
//      the pro is that you can set up the vars used by the condition in the block of code and it runs at least once if thats what you need
//      the con is that it runs at least once, even if the condition evaluates to false
//      another con is that you can't use variables that are declared in the block with let/const
do{
    weight = Math.floor(Math.random()*120)
    console.log(`You weight ${weight} kg${ weight<85?'.':', slightly larger than expected.' }`);
}while(weight < 85)


//------------------------------------
console.log("\n :: experiments :: \n");

