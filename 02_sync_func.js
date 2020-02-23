// 関数内でも、時間がかからなければ、同期処理
var wait = value => {
  console.log(value);
};

console.log(1000);
wait(2000);
console.log(3000);

// 1000
// 2000
// 3000
