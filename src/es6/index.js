//parametros por defecto
//antes
function newFunction(name, age, country) {
  var name = name || 'luis';
  var age = age  || 27;
  var country = country || 'colombia';
  console.log(name, age, country);
}

//ahora es6
function newFunction2(name = 'luis', age = '27', country = 'colombia') {
  console.log(name, age, country);
}

newFunction();
newFunction2();

//templates literals
//Antes
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

//ES6 Ahora

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)


//Multilínea 
//Antes

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' + 'Ut in nisl vitae nibh tempus luctus ut a enim. Aenean ac porta augue. Donec dapibus tempor metus vel pellentesque.'

//ES6 Ahora

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut in nisl vitae nibh tempus luctus ut a enim. Aenean ac porta augue.
Donec dapibus tempor metus vel pellentesque.`;

console.log(lorem)
console.log(lorem2)