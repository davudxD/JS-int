// This = A reference to the object that we are currently working with.
// This keyword in methods reference parent object.
// method => obj
// function => global (window, global)

// Ovaj primer nam vraca window objekat u konzoli.

// function Hellow() {
//     console.log(this)
// }

// Hellow()

// ======================================================================= //

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((item) => {
//       return console.log(this.title, item);
//     });
//   },
// };

// video.showTags();

// Ovaj nacin vraca u konzoli:
// a, a
// a, b
// a, c

// ======================================================================== //

function f() {
  return this.a;
}

var g = f.bind({ a: "Davud" });
console.log(g());

var h = g.bind({ a: "Mejra" }); // Ne radi. Ispisuje u konzoli Davud.
console.log(h());

var o = { a: 8, f: f, g: g, h: h };

console.log(o.f(), o.g(), o.h());

// ========================================================================= //

const d = {
  age: 18,
  f: function (name) {
    return this.age + " " + name;
  },
};

// ======================================================================== //

// This keyword in classes

class Player {
  constructor(name, age, height, position) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.position = position);
  }

  whatIsThis() {
    return console.log(this); // This se odnosi na ovaj objekat i ovaj console log vraca objekat i njegove propertise
    // zato sto se nalazimo unutar ovog objekta.
  }

  aboutMe(club) {
    return console.log(`My name is ${this.name}, im ${this.age} years old and i also play the ${this.position} position
        for ${club} football club.`);
    }
    // U ovom slucaju getItem() vraca undefined 3 puta zato sto se console log nalazi u funkciji koja je definisana sa
    // function keywordom.

    // getItem() {
    //     [1, 2, 3].map(function (item) { 
    //         console.log(this)
    //     })
    // }
      
    // U ovom slucaju getItem() ne vraca undefined vec vraca klasu 3 puta zato sto se console log nalazi u arrow funkciji i
    // ovo je ispravan nacin.
    
      getItem() {
        [1, 2, 3].map( (item) => { 
            console.log(this)
        })
    }
    
}

// Pozivanje getItem() metode:
const output = new Player("Davud", 18, "190cm", "cam");;
output.getItem();

// Kreiranje playera:
const rudiger = new Player("Rudiger", 30, "190cm", "cb");
const alaba = new Player("Alaba", 29, "182cm", "cb");

rudiger.whatIsThis(); // ===> Player {name: 'Rudiger', age: 30, height: '190cm', position: 'cb'}
alaba.whatIsThis(); // ===> Player {name: 'Alaba', age: 29, height: '182cm', position: 'cb'}

// Prikazivanje informacija o igracu:
rudiger.aboutMe("Real Madrid"); // ===> My name is Rudiger, im 30 years old and i also play the cb position
// for Real Madrid football club.
alaba.aboutMe("Real Madrid"); // ===> My name is Alaba, im 29 years old and i also play the cb position
// for Real Madrid football club.






