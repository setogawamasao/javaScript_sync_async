// Promiseによる同期処理
var wait = value => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, value);
  });
};

var main = async () => {
  console.log(1000);
  value1 = await wait(2000);
  value2 = await wait(value1 + 1000); //3000
  value3 = await wait(value2 + 1000); //4000
};

main();
