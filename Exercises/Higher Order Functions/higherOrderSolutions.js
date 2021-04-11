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
console.log(characters.map(val => val.height + 10));

console.log(characters.map(val => {
    return val.name;
}));

// Filter
console.log(characters.filter(val => val.height > 170));

console.log(characters.filter(val => val.gender === 'female'));

// Reduce
console.log(characters.reduce((acc, curr) => {
    return acc + curr.height;
}, 0));

// Every
console.log(characters.every(val => val.house === 'Gryffindor'));

console.log(characters.every(val => val.height >= 150));

// Some
console.log(characters.some(val => val.house === 'Gryffindor'));