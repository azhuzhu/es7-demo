// Rest Properties
var {a, ...rest} = {a: 1, b: 2, c: 3};
console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }

// Spread Properties
var spread = {b: 2, c: 3};
var O = {a: 1, ...spread};
console.log(O) // { a: 1, b: 2, c: 3 }