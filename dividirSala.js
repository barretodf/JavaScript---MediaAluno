//Usando o método .slice = dividir ou fatiar
//Só o slice não muda o array original
//tenho que criar uma variável antes para encapsular ele

const alunos = ['Helena', 'Alice','Laura','Manuela','Sophia','Isabella',
'Luísa','Heloísa','Cecília','Mai', 'Eloah', 'Elisa', 'Liz', 'Júlia','Maria',
 'Luísa', 'Valentina','Maria', 'Alice','Manuela','Sophia','Isabella'];

const sala1 = alunos.slice(0, 12);

console.log(sala1);