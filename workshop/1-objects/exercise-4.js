// Exercise 4
// -------------------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.

let keys = Object.keys(foodPairings);
console.log(keys);

// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."

let entries = Object.entries(foodPairings);

console.log(entries);

for (let i = 0; i < entries.length; i++) {
  for (let j = 0; j < entries[i].length - 1; j++) {
    console.log(
      `With ${entries[i][j]}, it is best to have ${entries[i][j + 1]}`
    );
  }
}
