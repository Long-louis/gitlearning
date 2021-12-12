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
//电子邮件
var reg = /\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}/;
var email = "abc.hello@163.com";
console.log(reg.test(email));
//test git diff
