const double = (n) => n * 2;
const increment = (n) => n + 1;
const increment3 = (n) => n + 3;
console.log('using node 10.x, @babel/core@7.x');
// without pipeline operator
const ap = double(increment(double(double(5)))); // 42
console.log(ap);
// with pipeline operator
const ap2 = 5 |> double |> double |> increment |> double ; // 42
console.log(ap2);

// with pipeline operator
const ap3 = 5 |> double |> double |> increment |> double |> double; // 84
console.log(ap3);