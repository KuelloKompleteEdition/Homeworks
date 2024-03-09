let array = [1, 2, 3, 4, 5];

// 1. concat
let newArray = array.concat([6, 7, 8]);
console.log("concat:", newArray);

// 2. every
let isAllEven = array.every((element) => element % 2 === 0);
console.log("every:", isAllEven);

// 3. filter
let evenNumbers = array.filter((element) => element % 2 === 0);
console.log("filter:", evenNumbers);

// 4. find
let firstEven = array.find((element) => element % 2 === 0);
console.log("find:", firstEven);

// 5. findIndex
let firstEvenIndex = array.findIndex((element) => element % 2 === 0);
console.log("findIndex:", firstEvenIndex);

// 6. forEach
console.log("forEach:");
array.forEach((element) => console.log(element));

// 7. includes
let hasThree = array.includes(3);
console.log("includes:", hasThree);

// 8. indexOf
let indexOfThree = array.indexOf(3);
console.log("indexOf:", indexOfThree);

// 9. join
let joinedString = array.join("-");
console.log("join:", joinedString);

// 10. map
let squaredArray = array.map((element) => element * element);
console.log("map:", squaredArray);

// 11. pop
let poppedElement = array.pop();
console.log("pop:", poppedElement);

// 12. push
array.push(6);
console.log("push:", array);

// 13. reduce
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reduce:", sum);

// 14. reverse
let reversedArray = array.reverse();
console.log("reverse:", reversedArray);

// 15. shift
let shiftedElement = array.shift();
console.log("shift:", shiftedElement);

// 16. slice
let slicedArray = array.slice(1, 3);
console.log("slice:", slicedArray);

// 17. some
let hasEven = array.some((element) => element % 2 === 0);
console.log("some:", hasEven);

// 18. sort
let sortedArray = array.sort((a, b) => a - b);
console.log("sort:", sortedArray);

// 19. splice
let splicedArray = array.splice(1, 2, 10, 11);
console.log("splice:", array);

// 20. toString
let arrayString = array.toString();
console.log("toString:", arrayString);

// 21. unshift
array.unshift(0);
console.log("unshift:", array);

  