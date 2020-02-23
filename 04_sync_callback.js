// コールバックによる同期処理
var wait = (value, callBack) => {
  setTimeout(() => {
    console.log(value);
    callBack();
  }, value);
};

console.log(1000);
wait(2000, () => {
  console.log(3000);
});

// 1000
// 2000
// 3000
