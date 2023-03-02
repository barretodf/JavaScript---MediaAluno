//Procurando um ítem em uma lista
//e inserir os dados vinculados a esse ítem

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const alunosMedias = [alunos, medias];

function exibeNomeNota (aluno) {
    if (alunosMedias [0].includes(aluno)) {
       // const alunos = alunosMedias[0];
        //const medias = alunosMedias[1];

        const [alunos, medias] = alunosMedias;

        const indice = alunos.indexOf(aluno);
        
        
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    }else{
        console.log('Aluno não encontrado!')
    }
} 
exibeNomeNota('Juliana');













