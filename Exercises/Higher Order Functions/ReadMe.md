# Short Practice with Higher Order Functions

## What are Higher Order Functions?

> Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. (Marijn Haverbeke 2018: 88)


## Magical Object

```javascript

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
```

## Useful Higher-Order-Functions to test with

### Map

- try to make everyone 10cm taller
- try to return an array with all the names of the characters

### Filter

- try to filter every character who is taller than harry
- try to filter every female character

### Reduce

- try to get the total height of all characters

### Every

- try to check if every character belongs to the house of Gryffindor
- try to check if every character is at least 150cm

### Some

- try to check if some characters belong to Gryffindor