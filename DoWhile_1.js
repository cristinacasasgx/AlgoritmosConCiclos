// 1. Garantía de ejecución: Crea un programa donde la variable de control sea 10 y la condición sea contador < 5. Observa cómo el bloque se ejecuta una vez a pesar de que la condición es falsa desde el inicio

function garantia() {
    let contador = 10;

    do {
        console.log("Se ejecuta al menos una vez:", contador);
    } while (contador < 5);
}
garantia();
