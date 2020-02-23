// コールバック地獄
var wait = (value, callBack) => {
  setTimeout(() => {
    console.log(value);
    callBack();
  }, value);
};

console.log(1000);
wait(2000, func1 => {
  wait(3000, func2 => {
    wait(4000, func3 => {
      wait(5000, func4 => {
        console.log(6000);
      });
    });
  });
});

// 1000
// 2000
// 3000
// 4000
// 5000
// 6000
