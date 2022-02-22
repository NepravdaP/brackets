module.exports = function check(str, bracketsConfig) {
  const obj = {};
  bracketsConfig.map((el) => (obj[el[0]] = el[1]));

  const allBrackets = [];

  for (let one of str) {
    const lastOne = allBrackets[allBrackets.length - 1];
    if (one in obj) {
      obj[one] === one && one === lastOne
        ? allBrackets.pop()
        : allBrackets.push(one);
    } else {
      const last = obj[lastOne];
      if (last === one) {
        allBrackets.pop();
      } else {
        return false;
      }
    }
  }

  return allBrackets.length === 0;
};
