var _ref, _ref2, _ref3, _, _ref4, _ref5, _ref6, _ref7, _2;

const double = function (n) {
  return n * 2;
};

const increment = function (n) {
  return n + 1;
};

const increment3 = function (n) {
  return n + 3;
};

console.log('using node 10.x, @babel/core@7.x'); // without pipeline operator

const ap = double(increment(double(double(5)))); // 42

console.log(ap); // with pipeline operator

const ap2 = (_ref = (_ref2 = (_ref3 = (_ = 5, double(_)), double(_ref3)), increment(_ref2)), double(_ref)); // 42

console.log(ap2); // with pipeline operator

const ap3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_2 = 5, double(_2)), double(_ref7)), increment(_ref6)), double(_ref5)), double(_ref4)); // 84

console.log(ap3);