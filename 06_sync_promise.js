// Promiseによる同期処理
var wait = value => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, value);
  });
};

console.log(1000);
wait(2000)
  .then(value1 => {
    return wait(value1 + 1000); //3000
  })
  .then(value2 => {
    return wait(value2 + 1000); //4000
  });
