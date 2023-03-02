//Função callback
/*
const nomes = ['Edmilson', 'Lucelia', 'Eloah'];

nomes.forEach(function(nome) {
    console.log(nome);
})
*/
//O código acima vai imprimir no terminal, os nomes que está no array 

//---------------------------------------------------------------------------------------------

const nomes = ['Edmilson', 'Lucelia', 'Eloah'];

nomes.forEach(function(nome) {
    console.log(nome);
})

/*----------------------------------------------------------------------------------------*/
//Vou usar aqui uma arrow function
nomes.forEach((nome) => {
    console.log(nome);
})

/*----------------------------------------------------------------------------------------*/
//Função callback de forma externa

function imprimeNome (nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);
