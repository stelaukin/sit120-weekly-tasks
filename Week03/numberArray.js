// JavaScript Number and Array Methods

let cheese = ['Gouda', 'Edam', 'Havarti', 'Brie'];

// print array
console.log(cheese);

// find method
console.log(cheese.find((cheese) => cheese === 'Edam'));
console.log(cheese.find((cheese) => cheese === 'Swiss'));

// find index
console.log(cheese.findIndex((cheese) => cheese === 'Edam'));
// -1 means it's not in the array
console.log(cheese.findIndex((cheese) => cheese === 'Swiss'));

//push method. Adds element to end of array
console.log(cheese.push('Swiss'));
console.log(cheese);

//pop method. removes element from end of array
// returns removed element
console.log(cheese.pop());
console.log(cheese);

let numbers = [3, 2, 5, 7, 1, 10, 44];
// doens't sort correctly with numbers 10 or over 
console.log(numbers.sort());
// will sort all numbers correctly
console.log(numbers.sort(function(a, b){return a-b}));

// slice to get some of array
console.log(numbers.slice(2, 5));


// concat arrays
const twoArrays = cheese.concat(numbers);
console.log(twoArrays);

// iterate list
cheese.forEach((cheese) => console.log(cheese));
twoArrays.forEach((twoArrays) => console.log(twoArrays));
