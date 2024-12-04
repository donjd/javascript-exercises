const findTheOldest = function (people) {
  function getAge(person) {
    const currentYear = new Date().getFullYear();
    if (person.yearOfDeath === undefined) {
      return currentYear - person.yearOfBirth;
    } else {
      return person.yearOfDeath - person.yearOfBirth;
    }
  }

  const peopleWithAge = people.map((person) => ({
    ...person,
    age: getAge(person),
  }));

  const oldestPerson = peopleWithAge.reduce((prev, curr) => {
    return prev.age > curr.age ? prev : curr;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
