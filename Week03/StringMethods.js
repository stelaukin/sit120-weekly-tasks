/* Pass Task 1 – JavaScript String Methods
Instruction: String methods help us to work with strings. Visit our Unit site or
https://www.w3schools.com/js/ for more information on JS details. Please see week 3 task
1 video tutorial for more detail. */

var helloWorld = 'Hello World!';

console.log(helloWorld[4]);

var l = 'l';
var U = 'U';

U = U.toLowerCase();

console.log(U);

if (U == 'U') {
    console.log('It is Upper!')
}
else {
    console.log('It is lower!')
}

let x = 'x';
let y = 'y';

if (x < y) {
    console.log(x + ' is less than ' + y);
} else if (x > y){
    console.log(x + ' is greater than ' + y);
} else {
    console.log(x + ' and ' + y + ' are equal');
}

let longString =
    'Thanks Basil. I just want to give you a bit of an insight into the Saturday afternoon team. ' +
    'We’re a bunch of unique individuals – Malthouse, Harley, Zempilas, McLachlan and myself. ' +
    'We’re gonna engage with our minds and our hearts. We’re gonna exchange ideas, thoughts and even our energy. ' +
    'And to speak from your heart you need to have courage. You need to be honest and authentic. ' +
    'We’re not always gonna get it right. And sometimes, you’re not going to agree with us. ' +
    'But that’s okay, because just like you we care. Just like you, we’re passionate about the game. ' +
    'So if you want to come along for the ride, join us on Saturday arvos, because we just love the footy.';

console.log(longString);

// don't do it this way apparently. 
/* longString = 
    'Thanks Basil. I just want to give you a bit of an insight into the Saturday afternoon team.\
    We’re a bunch of unique individuals – Malthouse, Harley, Zempilas, McLachlan and myself.\
    We’re gonna engage with our minds and our hearts. We’re gonna exchange ideas, thoughts and even our energy. \
    And to speak from your heart you need to have courage. You need to be honest and authentic. \
    We’re not always gonna get it right. And sometimes, you’re not going to agree with us. \
    But that’s okay, because just like you we care. Just like you, we’re passionate about the game. \
    So if you want to come along for the ride, join us on Saturday arvos, because we just love the footy.'; */

// length of a string
console.log(longString.length);
//slice it
console.log(longString.slice(92, 128))
//slice from end
console.log(longString.slice(-23));