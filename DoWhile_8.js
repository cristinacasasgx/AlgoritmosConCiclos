//8. Salida con break: Crea un bucle que cuente del 1 al 50, pero que se detenga y salga completamente del ciclo cuando el contador llegue a 25 usando break

function usoBreakDoWhile() {
    let i = 1;

    do {
        if (i === 25) {
            break;
        }
        console.log(i);
        i++;
    } while (i <= 50);
}
usoBreakDoWhile();