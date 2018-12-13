var nameVar = 'Jayme';
var nameVar = 'Polly Jean'
console.log('nameVar', nameVar);

let nameLet = 'Lentil';
nameLet = 'Butts';
console.log('nameLet', nameLet);

const nameConst = 'Scott';
console.log('nameConst', nameConst)

// var is function scoped

// function getPetName () {
//     var petName = 'Booger'
//     return petName;
// }

// getPetName();
// console.log(petName);

//let and const are block scoped

const fullName = "Jayme Ramsay";
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
