//9. Detección de Bucle Infinito: Identifica y corrige un código donde la condición x <= 5 sea siempre verdadera porque falta el incremento de la variable, evitando así que el programa se bloquee

function correccionBucleInfinito() {
    let x = 1;

    while (x <= 5) {
        console.log(x);
        x++; // Acá está la corrección que evita el bucle infinito
    }
}
correccionBucleInfinito();
