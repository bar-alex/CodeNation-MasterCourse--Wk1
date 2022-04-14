//-----------------------------------------------
console.log("\n :: activity 1 :: \n");

let customerAge = 18
if (customerAge > 17) console.log('Yes, I can serve you');
else console.log('You aren\'t old enough');

let customerCountry = 'France'
let legalityCheck = (customerAge > 17 && customerCountry.toUpperCase() == 'UK')

if (legalityCheck) console.log('Yes, I can serve you');
else console.log('You aren\'t old enough');

if (customerAge <= 17) console.log('You aren\'t old enough');
else if (customerCountry.toUpperCase() != 'UK') console.log('I\'m not sure, let\'s leave it at that');
else console.log('Yes, I can serve you');


//-----------------------------------------------
console.log("\n :: activity 2 :: \n");

let pizzaTopping = 'olives'

switch( pizzaTopping.toLowerCase() ){
    case 'pepperoni': console.log(`I don\'t mind having ${pizzaTopping} on my pizza.`); break;
    case 'cheese':
    case 'olives':
    case 'pineapple':
    case 'peppers': console.log(`${pizzaTopping} are important ingredients for my pizza.`); break;
    case 'spicy beef': 
    case 'spicy chicken':
    case 'fish':
    case 'prawn': console.log(`${pizzaTopping} should not be on my pizza.`); break;
    default: console.log(`I don't have a particular opinion about ${pizzaTopping}`);
}


//-----------------------------------------------
console.log("\n :: activity 3 :: \n");

let onePassword = 'abcDEF1234%^'
//let onePassword = 'abcDEF'

if (onePassword.length < 8) console.log('Password is to short');
else console.log(`Shh! Password is ${onePassword}`);


//-----------------------------------------------
console.log("\n :: activity 4 :: \n");

let oneNum = 10

if (oneNum%3 == 0 || oneNum%5 == 0) 
    console.log(`This number '${oneNum}' is divisible by 3 or 5`);
else 
    console.log('Something else');


//-----------------------------------------------
console.log("\n :: activity 5 :: \n");

let anotherNum = 21

if (anotherNum % 3 == 0 && anotherNum % 5 == 0) console.log('fizz buzz');
else if (anotherNum % 3 == 0) console.log('fizz');
else if (anotherNum % 5 == 0) console.log('buzz');
else console.log(anotherNum);


//-----------------------------------------------
console.log("\n :: activity 6 :: \n");

let againNum = 12321

let isPalindrome = ( againNum.toString() == againNum.toString().split('').reverse().join('') )

//let stringOfNum = againNum.toString()
//let isPalindrome = (stringOfNum == [...stringOfNum].split('').reverse().join('') )

// console.log(againNum.toString());
// console.log(againNum.toString().split(''));
// console.log(againNum.toString().split('').reverse());
// console.log(againNum.toString().split('').reverse().join(''));

if (isPalindrome) console.log(`'${againNum}' is a palindrome`);
else console.log(`'${againNum}' is NOT a palindrome`);


//-----------------------------------------------
console.log("\n :: activity 7 :: \n");

let oneHourOfTime = 19
let placeOfWork = 'Cool Company Inc.'
let townOfHome = 'Manc'

if (oneHourOfTime <= 7 || oneHourOfTime >= 19 ) console.log(`I'm at home, in ${townOfHome}`);
else if (oneHourOfTime < 9) console.log(`I'm commuting between '${townOfHome}' and '${placeOfWork}'`);
else if (oneHourOfTime > 17) console.log(`I'm commuting between '${placeOfWork}' and '${townOfHome}'`);
else console.log(`I\'m at work all day (well, 9 to 5) at '${placeOfWork}'`);


//-----------------------------------------------
console.log("\n :: activity 8 :: \n");

const vowels = 'aeiou'
const someString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let lastVowel = ''
let lastVowelPos = -1

for(const vwl of vowels){
    const foundPos = someString.lastIndexOf(vwl)
    // console.log(vwl,foundPos);
    if (foundPos>-1 && foundPos>lastVowelPos) 
        [lastVowel, lastVowelPos] = [ vwl, foundPos ]
}

if (lastVowelPos > -1) 
    console.log(`The last vowel is '${lastVowel}', found at the position ${lastVowelPos}`);
else 
    console.log('No vowel was found in the string');


// alternative

// const vowels = 'aeiou'
// const someString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'

let vowelsPosList = [
      someString.lastIndexOf("a")
    , someString.lastIndexOf("e")
    , someString.lastIndexOf("i")
    , someString.lastIndexOf("o")
    , someString.lastIndexOf("u")
]
lastVowelPos = Math.max(...vowelsPosList)

console.log(`The last vowel is on the position '${lastVowelPos}'`)


//-----------------------------------------------
console.log("\n :: activity 9 :: \n");

let oneWord = 'desired'
//let oneWord = 'words'

//console.log(oneWord[0]);
//console.log(oneWord[oneWord.length-1]);

if (oneWord[0] === oneWord[oneWord.length-1]) console.log(true);
else console.log(false);


//-----------------------------------------------
console.log("\n :: activity 10 :: \n");

let [num1, num2] = [4, 6]
//let [num1, num2] = [4, 5]

if ( (num1+num2)%2==0 ) console.log(num1+num2);
else console.log(num1*num2);


//-----------------------------------------------
console.log("\n :: experiments :: \n");


xx = (true && 'miw') && 'max' || 'moz'
console.log(xx);

yy = ('moe' || true || 1 || 'mix') && 'mez'
console.log(yy);

let resultOfSomething = 'truthy' ? true : false
console.log(resultOfSomething);

let anotherResult = 
        NaN ? 'true1' 
    :   ''  ? 'true2' 
    :   null ? 'true3' 
    :   undefined ? 'true4'
    :   'true5'
console.log(anotherResult);


