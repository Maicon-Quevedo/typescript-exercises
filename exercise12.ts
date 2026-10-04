const array_seis_notas: number[] = [8, 6, 7.5, 9, 5, 10];

function calcularMedia(array_seis_notas: number[]): number {
    let soma = 0;

    for(let nota of array_seis_notas) {
        soma += nota;
    }
    return soma / array_seis_notas.length;
}

function contarNotasMaioresOuIguaisA7(array_seis_notas: number[]): number {
    let contador = 0;

    for(let nota of array_seis_notas) {
        if(nota >= 7) {
            contador++;
        }
    }
    return contador;
}

const media_array_seis_notas = calcularMedia(array_seis_notas);
const quantidade = contarNotasMaioresOuIguaisA7(array_seis_notas);

console.log("Média:", media_array_seis_notas);
console.log("Notas maiores ou iguais a 7:", quantidade);