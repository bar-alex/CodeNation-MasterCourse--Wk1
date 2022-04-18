//-----------------------------------------------
console.log("\n :: activity:functions 1 :: \n");

const factorial = (n) => {
    if ( (n===0) || (n==1) ){
        return 1;
    } 
    else {
        return n * factorial(n-1);
    }
};

console.log( factorial(33) );
console.log( factorial(3) );
console.log( factorial(5) );



//-----------------------------------------------
console.log("\n :: activity:functions 2 :: \n");

let orderCount = 0;

const takeOrder = (topping, pizzaType) => {
    orderCount++;
    console.log( ` order_no #${orderCount} : Pizza ${pizzaType?pizzaType:''} with ${Array.isArray(topping)?topping.join(', '):topping}` );
};

takeOrder('pineapple');
takeOrder('pepperoni','stuffed crust');
takeOrder( 'ham/pineapple/peperoni/mushroom'.split('/'), 'thin crust' );


//-----------------------------------------------
console.log("\n :: activity:functions 3 :: \n");

let accountAmount = 300;
let accountPin = 'a123b';

const bank_withdraw = ( pin_no, cash ) => {
    if(pin_no == accountPin)
        if(cash <= accountAmount)
            if(cash>0){
                accountAmount = accountAmount - cash;
                console.log(`bank: You\'ve withdrawn ${cash} amount. You got left ${accountAmount}`);
                return cash;
            }
            else console.log(`bank: you can\'t break me, ${cash} needs to be non zero positive number`);
        else console.log('bank: you don\'t have enough cash in your account');
    else console.log('bank: pin incorrect');
};

bank_withdraw('ababa',54);
bank_withdraw('a123b',24);
bank_withdraw('a123b',200);
bank_withdraw('a123b',0);
bank_withdraw('a123b',-10);
bank_withdraw('a123b',330);


//-----------------------------------------------
console.log("\n :: activity:objects 0 :: \n");

const alarmClock = {
    weekDays : ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
    weekendAlarm: 'No alam needed',
    weekdayAlarm: 'Get up at 7 am',
    setAlarm( dayOfWeek ){
        if( !this.weekDays.includes( dayOfWeek?dayOfWeek.toLowerCase():'_' ) ){
            console.log(`Alarm: The provided day '${dayOfWeek}' is not on the calendar`);
            return false;
        }
        if( this.weekDays.indexOf( dayOfWeek.toLowerCase() )<5 )
            console.log(`Alarm for ${day}: ${this.weekdayAlarm}`);
        else
            console.log(`Alarmfor ${day}: ${this.weekendAlarm}`);
        return true;
    }
};

let day, alarmIsSet;

day = 'Friday';

alarmIsSet = alarmClock.setAlarm(day);
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );

day = 'Saturday';
alarmIsSet = alarmClock.setAlarm(day);
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );

day = 'Sunday';
alarmIsSet = alarmClock.setAlarm(day);
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );

day = 'Monday';
alarmIsSet = alarmClock.setAlarm(day);
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );


//-----------------------------------------------
console.log("\n :: activity:objects 1 :: \n");

let person ={
    name: 'Eduard',
    age: 39,
    favSongs: [
        'In hell i\'ll be in good company', 
        'Nothing else maters', 
        'Weapon of choice', 
        'Lazy song'
    ],
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
};

console.log(person);
console.log(person.favSongs);
person.sayHi();


//-----------------------------------------------
console.log("\n :: activity:objects 2 :: \n");

const pet = {
    name: "Lili",
    typeOfPet: "dog",
    age: 11,
    color: "black",
    eat(){
        console.log(`You pet ${this.name} si eating.`);
    },
    drink(){
        console.log(`You pet ${this.name} si drinking.`);
    }
};

pet.eat();
pet['drink']();


//-----------------------------------------------
console.log("\n :: activity:objects 3 :: \n");

const coffeeShop = {
    branch: "Manchester",
    menuDrinks: {
        lemonade: 2,
        machiatto: 3.75,
        cappucino: 3,
        americano: 2.50,
        expresso: 2,
    },
    menuFoods: {
        fish_And_chips: 4.50,
        fries: 1,
        'cottage pie': 3.20,
        steak: 8.70,
        'eggs and bacon': 5.55,
    },

    // create an order for a list of items from the drinks menu
    drinksOrder( listOfDrinks ){
        if(!Array.isArray(listOfDrinks)){
            console.log(`drinksOrdered(): needs a list as a parameter :: ${listOfDrinks}`);
            return; 
        }

        let textToDisplay = `% Welcome to Starpounds - ${this.branch} branch.\n% Your order follows:\n`;
        textToDisplay += this._getOrderFromList( listOfDrinks, this.menuDrinks );
        console.log(textToDisplay);
    },

    // create an order for a list of items from the food menu
    foodOrder( listOfFoods ){
        if(!Array.isArray(listOfFoods)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfFoods}`);
            return; 
        }

        let textToDisplay = `% Welcome to Starpounds - ${this.branch} branch.\n% Your order follows:\n`;
        textToDisplay += this._getOrderFromList( listOfFoods, this.menuFoods );
        console.log(textToDisplay);
    },

    // create an order for a list of mixed items, with drinks and food in the same list
    mixedOrder( listOfStuffs ){
        if(!Array.isArray(listOfStuffs)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfStuffs}`);
            return; 
        }

        let textToDisplay = `% Welcome to Starpounds - ${this.branch} branch.\n% Your order follows:\n`;
        textToDisplay += this._getOrderFromList( listOfStuffs, { ...this.menuDrinks, ...this.menuFoods } );
        console.log(textToDisplay);
    },

    // goes through the list of items and adds it to the order using the menu list provided
    _getOrderFromList( itemsToOrder, internalMenu ){

        const maxWidth = Math.max( ...itemsToOrder.map(x => x.length), 12 )    // max length for the items in the list (and the 'total to pay' text)
        let [ completeOrder, totalAmount ] = [ '',  0 ];

        for(let it of itemsToOrder){
            // string taken from the list, lowercase and remove the spaces
            const it_search = it.replaceAll(' ','').toLowerCase();
            
            // gets an array of objects' key-value pairs as 2-item arrays, find the right item, return the its key-value pair (2 item array)
            // lowercase and remove '_',' ' from the property name (the key part of the key-value pair) before comparing
            const it_menu = Object
                .entries( internalMenu )
                .find( (x) => x[0].toLowerCase().replaceAll('_','').replaceAll(' ','') == it_search );

            // if not found its undefined, aka false
            if( it_menu ){
                // get the price, then price as string for followup handling
                let [ price, price_str ] = [ it_menu[1], it_menu[1].toString() ];
                
                // price as string and add decimals so it looks nicer
                price_str += ( price_str.indexOf('.')==-1 ? '.00' : (price_str.indexOf('.')>price_str.length-3 ? '0' : '') );

                // one line in the order, use padding to align the prices
                completeOrder += `~ ${ it.trim().padEnd(maxWidth) } : ${ price_str.padStart(6) }\n`;
                totalAmount += price;
            }
            else completeOrder += `> We don't sell '${ it.trim() }'\n`;  // add line for item not found
        }
        // the total amount in string and with 2 decimals to look nice
        let totalAmount_str = totalAmount.toString();
        totalAmount_str += ( totalAmount_str.indexOf('.')==-1 ? '.00' : (totalAmount_str.indexOf('.')>totalAmount_str.length-3 ? '0' : '') );
        // add the total line to the order
        completeOrder += `# ${'Total to pay'.padEnd(maxWidth)} = ${totalAmount_str.padStart(6)}\n`;
        return completeOrder;
    },

};

// the order list can contain spaces, items not on menu/misspelled, different capitalization 
coffeeShop.drinksOrder( 'Coffee,Lemonade, Machiatto,Cappucino ,Lemonade'.split(',') );
coffeeShop.foodOrder( 'Fish and chips,cottage Pie,Eggs And Bacon,Fries,Steak'.split(',') );

coffeeShop.mixedOrder( 'Fish and Chips, Coffee, macHIaTTo, lemonAde, fries, expreso'.split(',') );


//-----------------------------------------------
console.log("\n :: experiments :: \n");


let people = {
    name: "alex",
    age: 1
};
console.log(people);
people.age = 2;
let frozen = Object.freeze(people);
people.age  =3;
people.name = 'Miw';
console.log(people);

people = {
    name: "Adrian",
    age: 1
};
console.log(people);
console.log(frozen);

console.log( Object.entries(people)  );

console.log('space string is truthy?', '   '?true:false);
console.log('space.replace() string is truthy?', '   '.replaceAll(' ','')?true:false);

console.log('turn empty string to boolean with !: ', ! '  '.replaceAll(' ','') );
