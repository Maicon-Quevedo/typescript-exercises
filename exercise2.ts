const total_dias_atraso: number = 1;

if(total_dias_atraso <= 0){
    console.log("Em dia");
}

if(total_dias_atraso >= 1 && total_dias_atraso <= 5){
        console.log("Atraso leve");
}

if(total_dias_atraso > 5){
            console.log("Atraso alto");
}