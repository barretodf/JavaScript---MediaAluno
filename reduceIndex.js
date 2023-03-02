//Vamos reescrever o reduce() de uma forma um pouco mais extensa para 
//separar melhor as partes do código:


const numeros = [43, 50, 65, 12];
const soma = numeros.reduce(function (acc, atual) {
    return atual + acc
}, 0);

console.log(soma);

