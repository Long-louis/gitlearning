// var str = "1a2b3c4d";
// var result = str.split(/[a-z]/);
// str = "hello bc hello aec";
// str = "1a2ba3cc4d5eAr";
// result = str.match(/[a-z]/gi);

// result = str.search(/a[be]c/);
// result = str.replace(/[A-z]/gi, "");
// var reg = /^a|c$/;
var reg = /^\s*|\s*$/g;

var str = "    admi   n    "
str = str.replace(reg, "");
console.log(str);

