//6. Simulación de llenado: Siguiendo el ejemplo de las fuentes, simula el llenado de un contenedor imprimiendo "Manzana añadida: X" hasta llegar a 100 manzanas

function llenarContenedorManzanas() {
    let i = 1;

    do {
        console.log("Manzana añadida:", i);
        i++;
    } while (i <= 100);
}
llenarContenedorManzanas();
