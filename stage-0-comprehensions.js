var customers = [{name: 'a', city: 'Seattle', age: 18},{name: 'b', city: 'Beijing', age: 35},{name: 'c', city: 'Seattle', age: 21}];

// Array comprehensions
var results = [
  for (c of customers)
    if (c.city == "Seattle")
  { name: c.name, age: c.age }
]
console.log('array:');
console.log(results); // [ { name: 'a', age: 18 }, { name: 'c', age: 21 } ]

// Generator comprehensions
var resultsGen = (
  for (c of customers)
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
)
console.log('generator:');
console.log(resultsGen.next()); // { value: { name: 'a', age: 18 }, done: false }
console.log(resultsGen.next()); // { value: { name: 'c', age: 21 }, done: false }
console.log(resultsGen.next()); // { value: undefined, done: true }

// Destructuring in comprehensions
console.log([for ([a, b, c] of [['a','b','c']]) a+b+c][0]); // abc
