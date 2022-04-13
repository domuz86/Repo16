let firstName = (firstName) => {
  return firstName.toUpperCase();
};
let lastName = (lastName) => {
  return lastName.toLowerCase();
};
console.log(firstName("Vasilije"));
console.log(lastName("Vujovic"));

exports.firstName = firstName;
exports.lastName = lastName;
