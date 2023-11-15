function countPrimeNumbers() {
    let count = 0;
    let isPrime = false;
    for (let i = 2; i <= 100; i++) {
        isPrime = true;
        if (i % 2 === 0 && i > 2) {
            isPrime = false;
        }
        for (let j = 2; j < Math.sqrt(i) + 0.5 && isPrime === true; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            count++;
        }
    }
    return count;
}

const start = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(console.log, 0, countPrimeNumbers());
}
const end = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
