//Q5. React: 組件

/* 
問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
*/

//附上 codesandbox 連結: https://codesandbox.io/s/simple-counter-dlf678?file=/src/styles.css
const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleIncrease = () => setCurrentCount((prev) => prev + 1);
  const handleDecrease = () => setCurrentCount((prev) => prev - 1);
  const reset = () => setCurrentCount(0);

  return (
    <div>
      <p>{currentCount}</p>
      <div>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button Click={reset}>Reset</button>
    </div>
  );
};
