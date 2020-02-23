var wait = value => {
  console.log("start: " + value);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("e n d: " + value);
      resolve(value);
    }, value);
  });
};

var main = async () => {
  const objects = [1000, 3000, 2000];
  var start = Date.now();
  console.log("計測開始");
  // for of の場合は　awaitが使える
  for (var object of objects) {
    await wait(object);
  }

  var end = Date.now();
  console.log("実行時間: " + (end - start) + "m");
};

main();

// 計測開始
// start: 1000
// e n d: 1000
// start: 3000
// e n d: 3000
// start: 2000
// e n d: 2000
// 実行時間: 6014m
