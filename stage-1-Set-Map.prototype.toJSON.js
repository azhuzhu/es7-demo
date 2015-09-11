var set = new Set();
[1, 2, 3, 2, 1].forEach(function (i) { set.add(i); });
console.log(set.toJSON()); // [ 1, 2, 3 ]

var map = new Map();
map.set('a', 'b');
map.set('c', 'd');
console.log(map.toJSON()) // [ [ 'a', 'b' ], [ 'c', 'd' ] ]