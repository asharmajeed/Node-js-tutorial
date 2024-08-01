// const xyz = require('./people');
// const {ages} = require('./people'); // destructuring
const {ages, people} = require('./people'); // destructuring

//console.log(xyz); // require statement returning empty object to xyz if there is no module.export in require file

// console.log(xyz);
// console.log(xyz.ages, xyz.people);
// console.log(ages);
console.log(ages, people);

const os = require('os');

console.log(os);