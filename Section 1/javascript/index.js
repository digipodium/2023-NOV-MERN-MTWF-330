console.log('Hello JavaScript!');

n = 50;

console.log(n);

console.log( typeof(n) );

heroname = "Batman";

console.log(heroname);

console.log( typeof(heroname) );

isHungry = true;

console.log( typeof(isHungry) );

age = 28;

if(age >= 18){
    console.log("You are eligible for DL");
    let x = 'something';
    const pi = 3.14;
    // pi = 3.38;
}else{
    console.log("You are not eligible for DL");
}

// console.log(pi);

// console.log(x);

console.log( 55 == "55" );
console.log( 55 === "55" );


console.log( 375467 / 4 )

// Arithmetic Operators
// +
// -
// *
// /
// %
// **

console.log( 2**4 );

console.log( 1 + 5 + 56 + '1' );

console.log( 56.7 + '%' );

// Logical Operators
// && - And Operator
// || - Or Operator
// ! - Not Operator



let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = text.match(/\d+/g).map(Number);
console.log(numbers);
let totalAnnualIncome = (numbers[0] * 12) + numbers[1] + (numbers[2] * 12);
console.log(totalAnnualIncome);