const pagLivros: number[] = [100, 45, 53, 24, 60, 20, 200];
let maiorQntd: number = pagLivros[0];
let menorQntd: number = pagLivros[0];
let soma: number = 0;

for (let i = 0; i < pagLivros.length; i++){
    soma += pagLivros[i];
}

for (const valorME of pagLivros ){
    if (valorME > maiorQntd) maiorQntd = valorME;
}

for (const valorMA of pagLivros) {
    if (valorMA < menorQntd) menorQntd = valorMA;
}

const mediaNotas = soma / pagLivros.length;

console.log(mediaNotas);
console.log(menorQntd);
console.log(maiorQntd);