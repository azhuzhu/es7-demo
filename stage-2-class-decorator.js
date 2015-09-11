class A {
	@nonconf
	get B() {} 
}

class B {
	get B() {} 
}

function nonconf(target, name, descriptor) {
	console.log(target);
	console.log(name);
	descriptor.configurable = false;
	return descriptor;
}

console.log('is A.B() configurable? ' + Object.getOwnPropertyDescriptor(A.prototype, "B").configurable); // true;  
console.log('is B.B() configurable? ' + Object.getOwnPropertyDescriptor(B.prototype, "B").configurable); // false;  