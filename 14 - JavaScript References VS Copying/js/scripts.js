// start with strings, numbers and booleans
// let age = 50;
// let age2 = age;
// console.log(age, age2);
// age = 75;
// console.log(age, age2);

// let name = "KD";
// let name2 = name;
// console.log(name, name2);
// name = "Kyrie";
// console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(team, players);

// You might think we can just do something like this:
// team[3] = "Shaq";

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Malone";
console.log(team4);

const team5 = Array.from(players);
team5[2] = "Hakeem The Dream";
console.log(team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 66;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 15 });
console.log(cap2);

// Object spread feature is now available
const cap3 = { ...person, name: "John" };
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const me = {
  name: "Cherry",
  age: 22,
  hobbies: {
    favourite: "basketball",
    current: "gym"
  }
};

console.clear();
console.log(me);

const guru = Object.assign({}, me);

// Deep clone option
const guru2 = JSON.parse(JSON.stringify(me));
