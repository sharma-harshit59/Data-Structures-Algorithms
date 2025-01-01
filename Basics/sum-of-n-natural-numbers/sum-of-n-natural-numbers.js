// Write a program in JavaScript to find the sum of first N natural numbers.

function sumN0(N) {
    // This function uses the Mathematical formula to find the sum of first N natural numbers, i.e., S(n) = n(n+1)/2
    // Time Complexity : ⊖(1)
    // Space Complexity: ⊖(1)
    return (N * (N + 1)) / 2;
}

function sumN1(N) {
    // This function iterates over each number from 1 to N and adds it to return the sum of the first N natural numbers
    // Time Complexity : ⊖(N)
    // Space Complexity: ⊖(1)
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

function sumN2(N) {
    // This function iterates over each number from 1 to N, where the number in iteration be X, and then adds 1 to the sum while iterating from 1 to X
    // Time Complexity : ⊖(N²)
    // Space Complexity: ⊖(1)
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            sum++;
        }
    }
    return sum;
}

let N = 5; // Change the number as per your wish
const sum0 = sumN0(N);
const sum1 = sumN1(N);
const sum2 = sumN2(N);

console.log("Sum of first", N, "natural numbers is: ", sum0, sum1, sum2);

