var str = "  \t \n  foo  bar \n \t   ";
console.log(str.trim()); // 'foo  bar';
console.log(str.trimLeft()); // 'foo  bar \n \t   ';
console.log(str.trimRight()); // '  \t \n  foo  bar';