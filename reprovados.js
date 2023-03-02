//Filtrando elementos com o método filter

const alunos = ['ANA', 'MARCOS', 'MARIA', 'MAURO'];
const medias = [7, 4.5, 8, 7.5];

//Se quiser saber a lista de aprovados é só inverter de < 7 para >= 7
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);