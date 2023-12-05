const nums = [3, 7, 9, 4, 7, 1, 5];

for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

console.log("------------------------");

for(let n of nums){
    console.log(n);
}

console.log("------------------------");

nums.forEach( (n) => { console.log(n); } );

// lets find 5
for(let n of nums){
    if(n === 5){
        console.log('Found 5');
    }
};

// Map function
let newArr = nums.map( (n) => { return n**2 } );
console.log(newArr);

const prices = [20, 46, 600, 7440, 1800, 2440, 2840];
// [2, 4.6, 60, 744, 180, 244, 284]

const newPrices = prices.map( (p) => { return p * 0.9 } );

console.log( newPrices );

const names = ['raju', 'ramu', 'kaliya', 'shamu'];

console.log( 'abc'.toUpperCase() );

const newNames = names.map( (n) => { return n.toUpperCase() } );

console.log(newNames);

// Filter function

const AllPrices = [23000, 4600, 8570, 1200, 1433, 649, 4945, 200];
// filter all prices which are greater than 2000
const budgetPrices = AllPrices.filter( (p) => { return p>2000 } );
console.log(budgetPrices);

// filter prices which are greater than 2000 and less than 5000

const budgetPrices2 = AllPrices.filter( (p) => { return p>2000 && p<5000 } );
console.log(budgetPrices2);

console.log('Raju Rastogi'.split(' ')[0] );