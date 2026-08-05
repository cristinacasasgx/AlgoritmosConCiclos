//6. Múltiplos de 5: Crea un bucle que muestre únicamente los múltiplos de 5 que se encuentran entre el 0 y el 50

function multiplosCinco() {
    let contador = 0;

    while (contador <= 50) {

        if (contador % 5 === 0) {
            console.log(contador);
        }

        contador++;
    }
}
multiplosCinco();