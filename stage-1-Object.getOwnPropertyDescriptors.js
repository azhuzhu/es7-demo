var object = {a: 1};
var B = typeof Symbol === 'function' ? Symbol('b') : 'b';
object[B] = 2;
var O = Object.defineProperty(object, 'c', {value: 3});
var D = Object.getOwnPropertyDescriptors(O);
console.log(object); // {'a':1}
console.log(object[B]); // 2
console.log(object.c); // 3
console.log(D); // {
	            //   'a':{'configurable':true,'enumerable':true,'value':1,'writable':true},
	            //   'c':{'configurable':false,'enumerable':false,'value':3,'writable':false}
	            // }
console.log(D[B]); // {'configurable':true,'enumerable':true,'value':2,'writable':true}