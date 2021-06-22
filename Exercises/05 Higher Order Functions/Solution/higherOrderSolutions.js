const characters = [
    {
        name: 'Harry Potter',
        height: 170,
        eye_color: 'green',
        house: 'Gryffindor',
        gender: 'male',
    },
    {
        name: 'Ron Weasley',
        height: 185,
        eye_color: 'blue',
        house: 'Gryffindor',
        gender: 'male',
    },
    {
        name: 'Hermione Granger',
        height: 165,
        eye_color: 'brown',
        house: 'Gryffindor',
        gender: 'female',
    },
    {
        name: 'Draco Malfoy',
        height: 178,
        eye_color: 'grey',
        house: 'Slytherin',
        gender: 'male',
    },
];

// Map
let allGrowingUp = characters.map(val => val.height + 10);
console.log(allGrowingUp);

let allCharNames = characters.map(val => val.name);
console.log(allCharNames);

// Filter
let charsTallerThanHarry = characters.filter(val => val.height > 170);
console.log(charsTallerThanHarry);

let allFemaleCharacters = characters.filter(val => val.gender === 'female');
console.log(allFemaleCharacters);

// Reduce
let totalHeightOfAllCharacters = characters.reduce((accumulator, current) => {
    return accumulator + current.height;
}, 0)
console.log(totalHeightOfAllCharacters);

// Every
let isEveryoneGryffindor = characters.every(val => val.house === 'Gryffindor');
console.log(isEveryoneGryffindor);

let isEveryoneTaller = characters.every(val => val.height >= 150)
console.log(isEveryoneTaller);

// Some
let someBelongToGryffindor = characters.some(val => val.house === 'Gryffindor');
console.log(someBelongToGryffindor);