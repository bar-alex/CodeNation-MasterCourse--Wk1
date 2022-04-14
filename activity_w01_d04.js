//-----------------------------------------------
console.log("\n :: activity:functions 1 :: \n");

const factorial = (n) => {
    if ( (n===0) || (n==1) ){
        return 1
    } 
    else {
        return n * factorial(n-1)
    }
}

console.log( factorial(33) );
console.log( factorial(3) );
console.log( factorial(5) );



//-----------------------------------------------
console.log("\n :: activity:functions 2 :: \n");

let orderCount = 0;

const takeOrder = (topping, pizzaType) => {
    orderCount++;
    console.log( ` order_no #${orderCount} : Pizza ${pizzaType?pizzaType:''} with ${Array.isArray(topping)?topping.join(', '):topping}` );
}

takeOrder('pineapple')
takeOrder('pepperoni','stuffed crust')
takeOrder( 'ham/pineapple/peperoni/mushroom'.split('/'), 'thin crust' )


//-----------------------------------------------
console.log("\n :: activity:functions 3 :: \n");

let accountAmount = 300
let accountPin = 'a123b'

const bank_withdraw = ( pin_no, cash ) => {
    if(pin_no == accountPin)
        if(cash <= accountAmount)
            if(cash>0){
                accountAmount = accountAmount - cash
                console.log(`bank: You\'ve withdrawn ${cash} amount. You got left ${accountAmount}`);
                return cash
            }
            else console.log(`bank: you can\'t break me, ${cash} needs to be non zero positive number`);
        else console.log('bank: you don\'t have enough cash in your account');
    else console.log('bank: pin incorrect');
}

bank_withdraw('ababa',54)
bank_withdraw('a123b',24)
bank_withdraw('a123b',200)
bank_withdraw('a123b',0)
bank_withdraw('a123b',-10)
bank_withdraw('a123b',330)


//-----------------------------------------------
console.log("\n :: activity:objects 0 :: \n");

const alarmClock = {
    weekDays : ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
    weekendAlarm: 'No alam needed',
    weekdayAlarm: 'Get up at 7 am',
    setAlarm( dayOfWeek ){
        if( !this.weekDays.includes( dayOfWeek?dayOfWeek.toLowerCase():'_' ) ){
            console.log(`Alarm: The provided day '${dayOfWeek}' is not on the calendar`);
            return false
        }
        if( this.weekDays.indexOf( dayOfWeek.toLowerCase() )<5 )
            console.log(`Alarm for ${day}: ${this.weekdayAlarm}`);
        else
            console.log(`Alarmfor ${day}: ${this.weekendAlarm}`);
        return true
    }
}

let day, alarmIsSet

day = 'Friday'

alarmIsSet = alarmClock.setAlarm(day)
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );

day = 'Saturday'
alarmIsSet = alarmClock.setAlarm(day)
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );

day = 'Sunday'
alarmIsSet = alarmClock.setAlarm(day)
console.log( alarmIsSet?`Alarm: alarm was set!`:'Alarm: alarm was not set!' );

day = 'Monday'
alarmIsSet = alarmClock.setAlarm(day)
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
}

console.log(person);
console.log(person.favSongs);
person.sayHi()


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
}

pet.eat()
pet['drink']()


//-----------------------------------------------
console.log("\n :: activity:objects 3 :: \n");

const coffeeShop = {
    branch: "Manchester",
    menuDrinks: {
        lemonade: 2,
        machiatto: 3.75,
        cappucino: 3,
        americano: 2.5,
        expresso: 2,
    },
    menuFoods: {
        fishandchips: 4.5,
        fries: 1,
        cottagepie: 3.2,
        steak: 8.7,
        eggsandbacon: 5.55,
    },

    drinksOrder( listOfDrinks ){
        if(!Array.isArray(listOfDrinks)){
            console.log(`drinksOrdered(): needs a list as a parameter :: ${listOfDrinks}`);
            return 
        }

        let textToDisplay = `% Welcome to Starwaks - ${this.branch} branch.\n% Your order follows:\n`
        textToDisplay += this._getOrderFromList( listOfDrinks, this.menuDrinks )
        console.log(textToDisplay);

    },

    foodOrder( listOfFoods ){
        if(!Array.isArray(listOfFoods)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfFoods}`);
            return 
        }

        let textToDisplay = `% Welcome to Starwaks - ${this.branch} branch.\n% Your order follows:\n`
        textToDisplay += this._getOrderFromList( listOfFoods, this.menuFoods )
        console.log(textToDisplay);

    },

    mixedOrder( listOfStuffs ){
        if(!Array.isArray(listOfStuffs)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfStuffs}`);
            return 
        }

        let textToDisplay = `% Welcome to Starwaks - ${this.branch} branch.\n% Your order follows:\n`
        textToDisplay += this._getOrderFromList( listOfStuffs, { ...this.menuDrinks, ...this.menuFoods } )
        console.log(textToDisplay);

    },

    _getOrderFromList( listItems, internalMenu ){

        let maxWidth = 
        let completeOrder = ''
        let totalAmount = 0
        for(it of listItems){
            //it = it.toLowerCase()
            let it_search = it.replaceAll(' ','',).toLowerCase()
            if(Object.keys( internalMenu ).includes( it_search )){
                completeOrder += `~ ${ it.trim() } : ${ internalMenu[ it_search ] }\n`
                totalAmount += internalMenu[ it_search ]
            }
            else completeOrder += `> We don't sell ${ it.trim() }\n`
        }
        completeOrder += `# Total to pay = ${totalAmount}\n`
        return completeOrder;

    },

}

coffeeShop.drinksOrder( 'Coffee,Lemonade,Machiatto,Cappucino,Lemonade'.split(',') )
coffeeShop.foodOrder( 'Fish And Chips,cottage Pie,Eggs And Bacon,Fries,Steak'.split(',') )

coffeeShop.mixedOrder('Fish And Chips, Coffee, Machiatto, Lemonade, Fries, expreso'.split(',') )


//-----------------------------------------------
console.log("\n :: experiments :: \n");
