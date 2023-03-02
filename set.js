//Removendo elementos repetidos usando spread operator no set
//Retornando a lista

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

//Agora temos uma lista