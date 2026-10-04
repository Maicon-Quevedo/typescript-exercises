const notas: number[] = [7,8,9];
let soma_notas: number = 0;

for(let i = 0; i < notas.length; i++){
    soma_notas += notas[i];
}

const media: number = soma_notas/notas.length;
console.log("Media: ", media);

if(media >= 7){
    console.log("Aprovado");
}

if(media < 7 && media >= 5){
    console.log("Recuperação");
}

if(media < 5){
    console.log("Reprovado");
}