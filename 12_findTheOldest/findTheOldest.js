const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const peopleWithAge = people.map((person) => ({
  ...person,
  age: getAge(person),
}));

function getAge(person) {
  const today = new Date().getTime();
  const birthYear = new Date(person.yearOfBirth).getTime();
  const deathYear = new Date(person.yearOfDeath).getTime();
  if (deathYear === undefined) {
    return today - birthYear;
  } else {
    return deathYear - birthYear;
  }
}

console.log(peopleWithAge[2].age);

// const findTheOldest = function (people) {
//   const getAge = function (person) {
//     let today = new Date().getTime();
//     const birthYear = new Date(person.yearOfBirth).getTime();
//     const deathYear = new Date(person.yearOfDeath).getTime();
//     if (deathYear === undefined) {
//       return today - birthYear;
//     } else {
//       return deathYear - birthYear;
//     }
//   };

//   const peopleWithAge = people.map((person) => {
//     name: person.name;
//     yearOfBirth: person.yearOfBirth;
//     yearOfDeath: person.yearOfDeath;
//     age: getAge(person);
//   });

//   console.log(peopleWithAge);
// };

// findTheOldest(people);

// Do not edit below this line
// module.exports = findTheOldest;
