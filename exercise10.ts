const numero_n: number = 10;
let pares: number = 0;
let soma_pares: number = 0;

for(let i = 1; i <= numero_n; i++){
    if(i % 2 === 0){
        pares++;
        soma_pares += i;
    }
}

console.log("Numeros pares encontrados:", pares);
console.log("Soma dos números pares encontrados:", soma_pares);