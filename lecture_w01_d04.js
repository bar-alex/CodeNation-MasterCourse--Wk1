const capitalise = (name) => {
    //   return name.charAt(0).toUpperCase()
    let letters = name.split("");
    letters[0] = letters[0].toUpperCase();
    name = letters.join("");
    return name;
  };
  
  const formatName = (fname, sname) => {
    return `${capitalise(fname)} ${capitalise(sname)}`;
  };
  
  console.log(formatName("ben", "maudslay"));
  console.log(formatName("chris", "thomason"));


  const person = {
      name: "Eduard",
      age: 39,
      toString(extraString){
          return this.name+', '+this.age+' years old'+
            ( extraString?'\nThe extra bit: '+extraString:'' );
      }
  };
  
//   person.fullname = ["Eduard", "Alexandru"]
//   person["anothername"] = ["Justa", "Coder"]
  person.favouriteSongs = ["Highway to heall", "Stairway to heaven"];
  person.games = ["Hunt: Showdown", "SoT", "Halo"];

  
  console.log(person);
  console.log(person.name);
  console.log(person.toString());
  console.log(person.toString("just some extra stuff"));
  
  
  x = {
    name: 'joe',
  };

  y = {
    age: 15,
    
    sayMiaw(){
      console.log(this.name);
    },
    name: 'Lisa',
  };

  console.log( {...x, ...y} );

  console.log( undefined? true: false );


  // const readline = require('readline').createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // })

  // readline.question(`What's your name?`, name => {
  //   console.log(`Hi ${name}!`)
  //   readline.close()
  // })
  