// 5.  Múltiplos específicos: Crea un programa que muestre todos los múltiplos de 4 que se encuentren entre el 0 y el 40

function multiplosDeCuatro() {
    let i = 0;

    do {
        if (i % 4 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= 40);
}
multiplosDeCuatro();
