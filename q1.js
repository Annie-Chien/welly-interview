//Q1. JavaScript: 字串反轉

function reverseString(str) {
  return [...str].reverse().join('');
}

console.log(reverseString('Hello')); //olleH
