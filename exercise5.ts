const pagLivros: number[] = [100, 45, 53, 24, 60, 20, 200];
let maiorQntd: number = pagLivros[0];
let menorQntd: number = pagLivros[0];
let soma: number = 0;

for (let i = 0; i < pagLivros.length; i++){
    soma += pagLivros[i];
}

for (const maior of pagLivros ){
    if (maior > maiorQntd) maiorQntd = maior;
}

for (const menor of pagLivros) {
    if (menor < menorQntd) menorQntd = menor;
}

const mediaNotas = soma / pagLivros.length;

console.log(mediaNotas);
console.log(menorQntd);
console.log(maiorQntd);