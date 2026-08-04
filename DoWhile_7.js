//7. Salto con continue: Escribe un ciclo del 1 al 10 que imprima los números, pero que "salte" la impresión del número 5 usando la sentencia continue

function saltoContinueCinco() {
    let i = 1;

    do {
        if (i === 5) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    } while (i <= 10);
}
saltoContinueCinco();
