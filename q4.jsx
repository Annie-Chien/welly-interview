//Q4. React: 條件渲染

/*
問題：在 React中，如何根據條件渲染兩種不同的內容？
*/

function ConditionalRendering({ isLoggedIn }) {
  if (!isLoggedIn) return <div>請先登入</div>;

  return (
    <div>
      <p>歡迎～您已成功登入！</p>
    </div>
  );
}
