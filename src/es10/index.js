//.flat aplanar un arreglo
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

//.flatMap()

let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value * 2]));

//Eliminar espacios en blanco strings

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());
let hello = 'hello world             ';
console.log(hello);
console.log(hello.trimEnd());

//transformar un arreglo a un objeto

let entries = [['name', 'luis'], ['age', 32]];
console.log(Object.fromEntries(entries))

//description symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description)