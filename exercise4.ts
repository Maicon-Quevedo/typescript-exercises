const livros: number[] = [1, 4, 5, 10, 20, 30, 22, 55];

for (const numero of livros) {

    if (numero % 10 === 0){
        console.log(numero, "Multiplo de 10")
    } else {
        console.log(numero);
    }
}