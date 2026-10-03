const emprestimos: number[] = [1, 5, 3, 1, 15, 2, 20];
let diasQuinze: number = 0;
let somaE: number = 0;

for (let i = 0; i < emprestimos.length; i++){
    somaE += emprestimos[i];
}

for (let i = 0; i < emprestimos.length; i++) {
    if (emprestimos[i] >= 15){
        diasQuinze++;
    }
}

const mediaEmprestimo = somaE / emprestimos.length;

console.log(diasQuinze);
console.log(mediaEmprestimo);
console.log(somaE);