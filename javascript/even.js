function averageOfEvens() {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) { 
            sum += i; 
            count++; 
        }
    }

    return sum / count;
}

const average = averageOfEvens();
console.log(`The average of even numbers from 1 to 100 ${average}`);
