function regularFunction(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}

const arrowFunction = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}


regularFunction(5);
regularFunction(8); 

arrowFunction(5); 
arrowFunction(8); 
