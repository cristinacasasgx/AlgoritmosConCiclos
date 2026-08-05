//7. Uso de Break: Escribe un ciclo que cuente del 1 al 10, pero que se interrumpa y salga del bucle inmediatamente cuando el contador llegue a 7

function breakConWhile() {
    let contador = 1;

    while (contador <= 10) {

        if (contador === 7) {
            break;
        }

        console.log(contador);
        contador++;
    }
}
breakConWhile();