//Usando o método .slice = dividir ou fatiar
//Só o slice não muda o array original
//tenho que criar uma variável antes para encapsular ele

const alunos = ['Helena', 'Alice','Laura','Manuela','Sophia','Isabella',
'Luísa','Heloísa','Cecília','Mai', 'Eloah', 'Elisa', 'Liz', 'Júlia','Maria',
 'Luísa', 'Valentina','Maria', 'Alice','Manuela','Sophia','Isabella'];

 //vai imprimir da 0 até 12 -1 = fica o total de 12
const sala1 = alunos.slice(0, 12);

//vai imprimir do 12 em diante
const sala2 = alunos.slice(12);

console.log(sala1);
console.log(sala2);