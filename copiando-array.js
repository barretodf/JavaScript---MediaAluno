//Crie um novo array com a nota 10 a mais, sem alterar o array original.
/*
const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`A novas notar do array são ${novasNotas}`)
console.log(`A novas notar do array são ${notas}`)
-----------------------------------------------------------------------------------------
O código acima está modificando o array original, quando eu coloquei a 
const novasNotas = notas;
o JS está entendendo que novasNotas e notas são iguais.
*/

const notas = [7, 7, 8, 9];
/*
Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". 
Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar 
seus valores no local que estamos indicando. 
É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. 
É isso que estamos dizendo para o JavaScript.
*/
const novasNotas = [...notas, 10];
//Apaguei a linha a baixo e coloquei o 10 direto em cima, funciona igual
//novasNotas.push(10);

console.log(`A novas notas do array são ${novasNotas}`)
console.log(`A notas originais do array são ${notas}`)

