//Somando com reduce

const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPyton = [7, 3.5, 8, 9.5];

//Além da função callback posso passar um segundo parâmetro para a função reduce
//depois da declaração da função vou colocar um segundo parâmetro 0, 
//esse zero é a função inicial do acumulador
function calculaMedia (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)
    const media = somaDasNotas / notasDaSala.length;
    return media;
}
console.log (`A média da sala de JavaScript é: ${calculaMedia(salaJs)}`);
console.log (`A média da sala de Java é: ${calculaMedia(salaJava)}`);
console.log (`A média da sala de Pyton é: ${calculaMedia(salaPyton)}`);
