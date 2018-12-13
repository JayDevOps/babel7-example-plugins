const double = (n) => n * 2;
const increment = (n) => n + 1;
'use strict';

const increment3 = (n) => n + 3;
console.log('using node 10.x, @babel/core@7.x');
console.log('npm i -D @babel/cli @babel/core @babel/present-env');
console.log('npm i -D @babel/plugin-transform-arrow-functions'); // this is not needed for node 10.x
console.log('npm i -D @babel/plugin-proposal-pipeline-operator');
console.log('create the file babel.config.js and plugins and presets as in this source');
console.log('.babelrc is limited to JSON, wherease babel.config.js supports all node scripts');
console.log('VSCode does not have a editor style for all plugins that are in proposal ');

// without pipeline operator
const ap = double(increment(double(double(5)))); // 42
console.log(ap);
// with pipeline operator
const ap2 = 5 |> double |> double |> increment |> double ; // 42
console.log(ap2);

// with pipeline operator
const ap3 = 5 |> double |> double |> increment |> double |> double; // 84
console.log(ap3);