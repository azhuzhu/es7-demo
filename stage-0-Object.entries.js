var obj = {a:'a', b:'b', c: 'c'}; // or use Object.create()
obj.a = 'aaa';
console.log(Object.entries(obj)); // [ [ 'a', 'aaa' ], [ 'b', 'b' ], [ 'c', 'c' ] ]
console.log(Array.isArray(Object.entries(obj)[0])); // true