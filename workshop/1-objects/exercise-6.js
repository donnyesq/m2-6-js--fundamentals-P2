/**
 * One of the most common tasks as a software developer is to "transform" data
 * from one form to another.
 *
 * In this exercise, you're asked to transform data from the given shape to
 * a new shape.
 */

let inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

/*

We want a function that can transform it from that shape to this shape:

{
  "name": "Will Byers",
  "age": 9,
  "status": "upside down",
  "address": {
    "streetAddress": "123 Whatever street",
    "city": "Hawkins",
    "state": "Indiana",
    "country": "United States"
  },
  "superpowers": [
    "can-blink-lights"
  ],
  "relationships": [
    {
      "type": "mother",
      "name": "Joyce Byers",
      "age": 35,
      "status": "worried",
      "superpowers": []
    },
    {
      "type": "girlfriend",
      "name": "Eleven",
      "age": 9,
      "status": "angry",
      "superpowers": [
        "telepathy",
        "multiverse portal sealing"
      ]
    }
  ]
}

Specifically:

- Address becomes nested in an object
- Instead of `superpower1` and `superpower2`, an array is used
- Instead of having a "flat" structure for relationships, a new `relationships`
  array is added, which holds objects for each relationship.
- Each relationship has a `type`, like mother/best-friend/girlfriend
- Each relationship also has an array of super powers, same logic as the main
  `superpowers` array

NOTE: For superpowers, you should only have as many items as are available.
For example, the main superpowers array should be:
✅ ['can-blink-lights']
⛔️ ['can-blink-lights', null]
*/

function transformData(data) {
  let obj = {};

  obj.name = data.name;
  obj.age = data.age;
  obj.status = data.status;
  obj.address = {};
  obj.address.streetAddress = data.address1;
  obj.address.city = data.addressCity;
  obj.address.state = data.addressState;
  obj.address.country = data.addressCountry;
  obj.superpowers = [];

  if (data.superpower1 !== null) {
    obj.superpowers.push(data.superpower1);
  }
  if (data.superpower2 !== null) {
    obj.superpowers.push(data.superpower2);
  }

  obj.relationships = [];
  obj.relationships.push({});
  obj.relationships[0].type = "mother";
  obj.relationships[0].name = data.motherName;
  obj.relationships[0].age = data.motherAge;
  obj.relationships[0].status = data.motherStatus;
  obj.relationships[0].superpowers = [];

  if (data.motherSuperpower1 !== null) {
    obj.relationships[0].superpowers.push(data.motherSuperpower1);
  }
  if (data.motherSuperpower2 !== null) {
    obj.relationships[0].superpowers.push(data.motherSuperpower2);
  }

  obj.relationships.push({});

  obj.relationships[1].type = "girlfriend";
  obj.relationships[1].name = data.girlfriendName;
  obj.relationships[1].age = data.girlfriendAge;
  obj.relationships[1].status = data.girlfriendStatus;
  obj.relationships[1].superpowers = [];

  if (data.girlfriendSuperpower1 !== null) {
    obj.relationships[1].superpowers.push(data.girlfriendSuperpower1);
  }
  if (data.girlfriendSuperpower2 !== null) {
    obj.relationships[1].superpowers.push(data.girlfriendSuperpower2);
  }

  // console.log(obj);
  return obj;
}

/*
  `JSON.stringify` is used to "pretty-print" the output, so that it's easy
  to see what it looks like, and debug any problems.
*/
console.log(JSON.stringify(transformData(inputData), null, 2));
