//Excluir elementos com .splice

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//primeiro parâmetro é o indice do elemento que quero remover
//O segundo é a quantidade de ítens que quero remover a partir desse índice
//O terceiro é o novo elemento adicionado no lugar do anterior

nomes.splice(1,2, "Rodrigo");

//Agora adicionar o aluno Rodrigo.


console.log(nomes);