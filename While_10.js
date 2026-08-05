//10. Comparación While vs Do...While: Escribe un ciclo while con una condición que sea falsa desde el inicio (por ejemplo, contador < 0) para observar que no se ejecuta ninguna vez, a diferencia de un do...while

let contador = 0;

while (contador < 0) {
    console.log("Este mensaje nunca se muestra en la consola, porque evalúa antes de entrar al bloque, al ser falsa, no se ejecuta");
    contador++;
}



let contador = 0;

do {
    console.log("Este mensaje se muestra una vez, aunque la condición sea falsa, porque evalúa después de ejecutar el bloque");
    contador++;
} while (contador < 0);
