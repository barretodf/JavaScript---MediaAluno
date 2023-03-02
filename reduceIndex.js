/*
Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():
*/

function operacaoNumerica(acc, atual) {
    return atual + acc;
}
const numeros = [43, 50, 65, 12];
const soma = numeros.reduce(function (acc, atual) {
    return atual + acc
}, 0);

console.log(soma);

