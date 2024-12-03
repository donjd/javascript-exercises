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

const findTheOldest = function (people) {
  let today = new Date();
  const getAge = function (person) {
    if (person.yearOfDeath === undefined) {
      return today.getTime() - person.yearOfBirth.getTime();
    } else {
      return person.yearOfDeath.getTime() - person.yearOfBirth.getTime();
    }
  };

  const oldestAge = people
    .map(getAge)
    .reduce((curr, next) => Math.max(curr, next));

  const oldestPerson = console.log(oldestAge);
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
