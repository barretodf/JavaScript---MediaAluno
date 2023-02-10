//Dividindo a sala ao meio, caso eu não saiba a quantidade de alunos por ex

const alunos = ['Helena', 'Alice','Laura','Manuela','Sophia','Isabella',
'Luísa','Heloísa','Cecília','Mai', 'Eloah', 'Elisa', 'Liz', 'Júlia','Maria',
 'Luísa', 'Valentina','Maria', 'Alice','Manuela','Sophia','Isabella'];

 //vai imprimir da 0 até 12 -1 = fica o total de 12
const sala1 = alunos.slice(0, alunos.length / 2);

//vai imprimir do 12 em diante
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);