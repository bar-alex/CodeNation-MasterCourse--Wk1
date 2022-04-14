//------------------------------------
console.log("\n :: activity 01 :: \n");

let name = "John";
let age = 27;
let favColor = "green";

console.log(
  `Someone's name is "${name}", he/she's ${age} years old and it's favorite color is "${favColor}"`
);

name = "Clarissa";
age = 21;
favColor = "red";

console.log(
  `Someone's name is "${name}", he/she's ${age} years old and it's favorite color is "${favColor}"`
);

//------------------------------------
console.log("\n :: activity 02 :: \n");

let breakfast = ["Cereal", "Sandwiches"];
let lunch = ["Soup", "Steak"];
let tea = ["earl grey", "fine wine"];
let dinner = ["sandwiches", "light soup"];

console.log(
  `Today I had ${breakfast[0]} for breakfast, some ${lunch[0]} for lunch, an amazing ${tea[0]} fro tea, and a light dinner, consisting of ${dinner[0]}. Delicious!`
);

console.log(
  `And tomorrow I'll have ${breakfast[1]} for breakfast, some ${lunch[1]} for lunch, ${tea[1]} for tea, and a ${dinner[1]} at dinner. Yumm!`
);

//------------------------------------
console.log("\n :: activity 03 :: \n");

const millsPerDay = 24 * 60 * 60 * 1000; // day
const thisDay = new Date();
const thisYear = thisDay.getFullYear();
const birthDay = new Date(thisYear, 12, 17);

let diffDays = Math.round(Math.abs((birthDay - thisDay) / millsPerDay));

console.log(`Days until your birthday ${diffDays}`);

//------------------------------------
console.log("\n :: activity 04 :: \n");

let [space1, space2, space3] = ["x", "o", " "],
  [space4, space5, space6] = ["x", "x", " "],
  [space7, space8, space9] = ["0", " ", " "];

let board = `
  ${space1} | ${space2} | ${space3} 
 -----------
  ${space4} | ${space5} | ${space6} 
 -----------
  ${space7} | ${space8} | ${space9} 
`;
console.log(board);

let winCombinations = [
  space1 + space2 + space3,
  space4 + space5 + space6,
  space7 + space8 + space9,
  space1 + space5 + space9,
  space3 + space5 + space7,
  space1 + space4 + space7,
  space3 + space6 + space9,
];
if (winCombinations.includes("xxx")) console.log(" you won! ");
else if (winCombinations.includes("ooo")) console.log(" you loose! ");
else console.log(" it's a draw! ");

//------------------------------------
console.log("\n :: experiments 1 :: \n");

Array.prototype.rand_sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Number.prototype.rand_sample = function () {
  returnValue = Math.floor(Math.random() * this.valueOf());
  return returnValue;
};

const data = {
  firstNameList: ["Jim", "John", "James", "Adam", "Dom", "Callum", "Harry"],
  lastNameList: ["Cross", "Lawrence", "Mathews", "Armitt"],
  colorList: ["Orange", "Yellow", "Red", "Green", "Blue"],
};

const maxAge = 100;

console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);
console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);
console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);
console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);
console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);

//------------------------------------
console.log("\n :: experiments 2 :: \n");

