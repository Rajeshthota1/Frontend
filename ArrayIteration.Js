//filter
//does return new array
//can manipulate the size of new array
//returns based on condition

const people = [
    { name: "Emma Waston", age: 27, position: "The Leader" },
    { name: "Daniel", age: 28, position: "Hero" },
    { name: "Ron", age: 31, position: "Hero Friend" },
    { name: "Vand", age: 32, position: "Hero Friend" },
];

// const youngPeople = people.filter(function (person) {
//     return person.age <= 30;
// });
// console.log(youngPeople);

// const newArray = people.filter(function (person) {
//     return person.position === "Hero Friend";
// });
// console.log(newArray);

// we can write like this also

const newArray = people.filter(person => person.position === "Hero Friend");
console.log(newArray);

