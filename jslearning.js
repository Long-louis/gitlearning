var str = "1a2b3c4d";
var result = str.split(/[a-z]/);
str = "hello bc hello aec";
str = "1a2b3cc4d5er";
result = str.match(/[A-z]/);
// result = str.search(/a[be]c/);
console.log( Array.isArray(result));

