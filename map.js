//Método map

const notas = [10, 9.5, 8, 7, 6];

//depois de nota + 1 utilizei um operador ternário (é tipo if e else resumido)
//nota + 1 é maior ou igual a 10? retorne 10 se não retorne a nota + 1.
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas);

