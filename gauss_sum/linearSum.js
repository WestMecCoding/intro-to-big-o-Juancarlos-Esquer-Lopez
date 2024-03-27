// create a function that will take an argument
// that stands for the maximum interger you
// want to count to

// initialize a starting value for the total sum

// run a for loop that starts at the first number
// and counts up to the maximum

// sum the numbers in the loop

// return the final total sum

// log the final output

let sum = 0;

function linearSum(n) {
    for (let i = 1; i <= 100; i++) {
    sum += i;
    }
    return sum;
}
console.log(linearSum(100))