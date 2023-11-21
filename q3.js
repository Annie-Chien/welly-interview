//Q3. JavaScript: 重構

/* 
問題：重構這段程式碼並說明原因
function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}
*/

//------------------------ 重構後程式碼如下 ----------------------//

//1. 使用 tenary operator 使程式碼更簡潔
//2. 使用 template literals 增加程式碼可讀性
//3. 組合 firstName 和 lastName 之前，先判斷是否兩者皆正確傳入函式，若有缺少則回傳空字串

function formatName(firstName, lastName) {
  return firstName && lastName ? `${firstName} ${lastName}` : '';
}

console.log(formatName('Rachel', 'Green')); //Rachel Green
