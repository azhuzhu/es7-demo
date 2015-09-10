var obj = {a:'a', b:'b', c: 'c'}; // or use Object.create()
obj.a = 'aaa';
console.log(Object.values(obj)); // [ 'aaa', 'b', 'c' ]