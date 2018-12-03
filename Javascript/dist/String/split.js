var str1 = 'abc,def,ghi,jkl';
str1.split(',');
// str1 === 'abc,def,ghi,jkl';
console.log(str1); // 'abc,def,ghi,jkl'
console.log(str1.split(',')); // ['abc', 'def', 'ghi', 'jkl']
console.log(str1.split(',', 2)); // ['abc', 'def,ghi,jkl']
var str2 = '`~!a@#a$%a^&a*(a)_';
console.log(str2); // ~!a@#a$%a^&a*(a)_
console.log(str2.split('a')); // ['~!', '@#', '$%', '^&', '*(', ')_']
console.log(str2.split('a', 4));
var str3 = '0123456789';
console.log(str3); // '0123456789'
console.log(str3.split('')); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
