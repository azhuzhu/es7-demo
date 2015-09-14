// run it in chrome
// Object.observe()
// Object.observe(obj, callback[, acceptList])
var obj = { name: 'Will', age: 18, addr : {home: 'home', work: 'work'}};
Object.observe(obj, function(changes) {
	changes.forEach(function(change, i){
 	console.log('what property changed? ' + change.name);
	console.log('how did it change? ' + change.type);
	console.log('whats the current value? ' + change.object[change.name]);
	console.log('change object: ',change);
  });
});

obj.name = 'June';
obj.age = '21';
obj.addr.home = 'new house'; // no response
setTimeout(function() {obj.corp = 'Red Hat';}, 3000);


// Array.observe() 
var arr = ['a', 'b', 'c'];

Array.observe(arr, function(changes) {
  console.log(changes);
});

arr[1] = 'B';
// [{type: 'update', object: <arr>, name: '1', oldValue: 'b'}]

arr[3] = 'd';
// [{type: 'splice', object: <arr>, index: 3, removed: [], addedCount: 1}]

arr.splice(1, 2, 'beta', 'gamma', 'delta');
// [{type: 'splice', object: <arr>, index: 1, removed: ['B', 'c', 'd'], addedCount: 3}]