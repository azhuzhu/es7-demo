// binary form
function foo() {
	this.garply = 'foo' + this.garply;
	return this;
}
var obj = { garply: 'bar' };
// foobar
console.log(obj::foo()); 

// unary form
var obj = { garply: "bar",
            foo: function() {
            	this.garply = 'foo' + this.garply;
            	return this;
            }
        };
// foobar
console.log(::obj.foo().garply);