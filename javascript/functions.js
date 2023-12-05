function addNums(a, b){
    var c = a + b;
    console.log(c);
}

addNums( 45, 67 );

// console.log(c);

// addNums( 28, 2894 );
// addNums( 43, 873 );
// addNums( 9384, 85 );
// addNums( 398, 345 );

const getAvg = function(m, n, o, p){
    console.log(m, n, o, p);
    let sum = m + n + o + p;
    console.log(sum/4);
}

getAvg( 45, 67 );

const factorial = (n) => {
    let f = 1;
    for(let i=2; i<=n; i++){
        f = f*i;
    }

    // console.log(f);
    return f;
};

let ans = factorial(5);
console.log(ans);