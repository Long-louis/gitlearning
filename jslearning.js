// var str = "1a2b3c4d";
// var result = str.split(/[a-z]/);
// str = "hello bc hello aec";
// str = "1a2b3cc4d5er";
// result = str.match(/[A-z]/);
// // result = str.search(/a[be]c/);
// console.log( Array.isArray(result));

//电子邮件
var reg = /\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}/;
var email = "abc.hello@163.com";
console.log(reg.test(email));
