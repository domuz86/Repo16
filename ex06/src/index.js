let firstName = (firstName) => {
  return firstName.toUpperCase();
};
let lastName = (lastName) => {
  return lastName.toLowerCase();
};
console.log(firstName("Muamer"));
console.log(lastName("manko"));

exports.firstName = firstName;
exports.lastName = lastName;
