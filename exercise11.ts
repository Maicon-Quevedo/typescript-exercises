const array_notas: number[] = [7, 5.5, 9, 6, 8];
let menor_nota: number = array_notas[0];
let maior_nota: number = array_notas[0];
let soma_das_notas: number = 0;

for(let i = 0; i < array_notas.length; i++){
    soma_das_notas += array_notas[i];

    if(array_notas[i] > maior_nota){
        maior_nota = array_notas[i];
    }
    if(array_notas[i] < menor_nota){
        menor_nota = array_notas[i];
    }
}

const media_turma: number = soma_das_notas / array_notas.length;

console.log("Média da turma:", media_turma);
console.log("Maior nota: ", maior_nota);
console.log("Menor nota: ", menor_nota);