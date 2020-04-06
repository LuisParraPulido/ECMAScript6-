//Object.entries => convertir un objeto a una matriz
const data = {
  frontend: 'luis',
  backend: 'adrian',
  design: 'ana'
} 
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//------------------------------------------------------------------

//Object.values => valores de un objeto a un array
const data = {
  frontend: 'luis',
  backend: 'adrian',
  design: 'ana'
} 

const values = Object.values(data)
console.log(values)
console.log(values.length)

//----------------------------------------------------------------------

//Agregar elementos a una string

const string = 'hello'
console.log(string.padStart( 7, 'hi'))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, ' ------'))