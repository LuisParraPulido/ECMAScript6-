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

//--------------------------------------------------------------------------------

//templates literals
//Antes
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
//ES6 Ahora
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//-------------------------------------------------------------------------------------

//Multilínea 
//Antes
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' + 'Ut in nisl vitae nibh tempus luctus ut a enim. Aenean ac porta augue. Donec dapibus tempor metus vel pellentesque.'
//ES6 Ahora
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut in nisl vitae nibh tempus luctus ut a enim. Aenean ac porta augue.
Donec dapibus tempor metus vel pellentesque.`;
console.log(lorem)
console.log(lorem2)

//------------------------------------------------------------------

//Desestructuración
let person = {
  'name': 'luis',
  'age': 32,
  'country': 'Colombia'
}
//antes
console.log(person.name, person.age, person.country);
//ES6 Ahora
let { name, age, country } = person;
console.log(name, age, country)

//-----------------------------------------------------------------------

//Spread Operator o operadores de propagación
let team1 = ['luis', 'juan', 'pedro'];
let team2 = ['Valeria', 'vanesa', 'transito']
//antes
let teamEducation = ['david', 'ortension','luis', 'juan', 'pedro','Valeria', 'vanesa', 'transito']
console.log(teamEducation)
//ES6 now
let teamEducation2 = ['david', 'ortensio', ...team1, ...team2]
console.log(teamEducation2)

//------------------------------------------------------------------------------

// LET y CONST
//Before VAR
{
  var globalvalue = 'Global Var';
}
//ES6 now
{
  let globalvalue2 = 'Global Let'
}
console.log(globalvalue)
console.log(globalvalue2) //no se puede acceder
const a = 'b'; 
a = 'a';//It's not posible

//---------------------------------------------------------------------------------------

//Parámetros en objetos
let name = 'luis';
let age = '32';
//Before
obj = { name: name, age: age }
//ES6 now
obj2 = { name, age };
console.log(obj)
console.log(obj2)

//-----------------------------------------------------------------------

//Arrow Functions
const names = [
  { name: 'Luis', age: 32 },
  { name: 'Laura', age: 27 }
]
//Before
let listOfNames = names.map(function (item) {
  console.log(item.name);
})
//ES6 now
let listOfNames2 = names.map(item => console.log(item.name));
//form2
const listOfNames3 = (name, age, country) => {
  //
}
//form3
const listOfNames4 = name => {
  //
}
//other posibility
const square = num => num * num;

//------------------------------------------------------------------------------

//Promises
const helloPromise = (valor) => {
  return new Promise((resolve, reject) => {
    if(valor === true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}
helloPromise(false)
  .then(response => console.log(response))
  .catch(error => console.log(error))

//--------------------------------------------------------------------------------------

//class
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//---------------------------------------------------------------------

//módulos
import { hello } from './module';

hello();

//-----------------------------------------------------------------

//Generators
function* helloworld() {
  if(true) {
    yield 'hello, ';
  }
  if(true) {
    yield 'World';
  }
};
const generetorHello = helloworld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
