//Q2. JavaScript: 陣列過濾

function filterNumbersGreaterThanFive(numArr) {
  return numArr.filter((num) => num > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // [8, 10, 7]
