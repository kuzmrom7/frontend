const countSymbol = function (str, symbol) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      result += 1;
    }
  }

  return result;
};

countSymbol("Hello", "o"); // 1
countSymbol("Hello", "l"); // 2
countSymbol("Hello", "H"); // 1
countSymbol("Hello", "h"); // 0
