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
  // for ofでも非同期で並列
  for (var object of objects) {
    wait(object);
  }

  var end = Date.now();
  console.log("実行時間: " + (end - start) + "m");
};

main();
