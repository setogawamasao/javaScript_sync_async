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
  // 何もなしだと並列
  // !!!最もシンプルなfor文にasync/awaitはサポートされていない。!!!
  for (var i = 0; i < objects.length; i++) {
    sampleResolve(objects[i]);
  }

  var end = Date.now();
  console.log("実行時間: " + (end - start) + "m");
};

main();
