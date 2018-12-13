var _ref, _ref2, _ref3, _, _ref4, _ref5, _ref6, _ref7, _2;

const double = n => n * 2;

const increment = n => n + 1;

const increment3 = n => n + 3;

console.log('using node 10.x, @babel/core@7.x');
console.log('npm i -D @babel/cli @babel/core @babel/present-env');
console.log('npm i -D @babel/plugin-transform-arrow-functions'); // this is not needed for node 10.x

console.log('npm i -D @babel/plugin-proposal-pipeline-operator');
console.log('create the file babel.config.js and plugins and presets as in this source');
console.log('.babelrc is limited to JSON, wherease babel.config.js supports all node scripts');
console.log('VSCode does not have a editor style for all plugins that are in proposal '); // without pipeline operator

const ap = double(increment(double(double(5)))); // 42

console.log(ap); // with pipeline operator

const ap2 = (_ref = (_ref2 = (_ref3 = (_ = 5, double(_)), double(_ref3)), increment(_ref2)), double(_ref)); // 42

console.log(ap2); // with pipeline operator

const ap3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_2 = 5, double(_2)), double(_ref7)), increment(_ref6)), double(_ref5)), double(_ref4)); // 84

console.log(ap3);
