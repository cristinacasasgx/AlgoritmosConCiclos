//8.	Uso de Continue: Crea un programa que cuente del 1 al 5, pero que "salte" la impresión del número 3 y continúe con los demás números de la secuencia

function continueConWhile() {
    let contador = 1;

    while (contador <= 5) {

        if (contador === 3) {
            contador++;
            continue;
        }

        console.log(contador);
        contador++;
    }
}
continueConWhile();
