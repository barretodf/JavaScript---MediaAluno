//Média com laço de repetição for of

/*
const notas = [10, 6.5, 8, 7.5];

for (let elemento of notas) {
    console.log(elemento);
}
*/

//Esse código acima imprime as notas que estão no array


const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);