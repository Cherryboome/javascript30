const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("What's up?");

// Interpolated
console.log("Hello, I am a %s string!", "💩");

// Styled
// console.log("%c I am some random test", "font-size:50px");

// warning!
console.warn("Warning!");

// Error :|
console.error("💩");

// Info
console.info("Saint Lucia is the most beautiful island in the world!");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("msg") === -1, "Incorrect");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Cherry");
console.count("Donnie");
console.count("Cherry");
console.count("Donnie");
console.count("Donnie");
console.count("Cherry");

// timing
console.time("fetching-data");
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching-data");
    console.log(data);
  });

// table
console.table(dogs);
