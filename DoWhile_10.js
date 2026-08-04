// Detección de paridad: Crea un ciclo que recorra los números del 1 al 20 e imprima solo aquellos que son pares, utilizando una estructura condicional dentro del bloque do

function paridad() {
    let i = 1;

    do {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= 20);
}
paridad();