// 非同期処理
var wait = value => {
  setTimeout(() => {
    console.log(value);
  }, value);
};

console.log(1000);
wait(2000);
console.log(3000);

// 1000
// 3000
// 2000
