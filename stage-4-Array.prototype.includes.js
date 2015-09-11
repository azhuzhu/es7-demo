// array.includes(searchElement[, fromIndex])
console.log([1, 2, 3].includes(1)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(1, 1)); // false
console.log([1, 2, 3].includes()); // false
console.log(Array(1).includes()); // true  = includes(undefined)
console.log(Array(0).includes()); // false