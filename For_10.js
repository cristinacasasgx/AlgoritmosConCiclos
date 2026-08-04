//10.	Búsqueda de índice: Dado un arreglo de elementos, utiliza un ciclo para encontrar en qué posición (índice) se encuentra un valor específico y detén la búsqueda una vez hallado.

function posicion() {
    let arreglo = ["Elisa", "Carmen", "Salvador", "Margarita"];
    let nombreBuscado = "Carmen";
    let indice = -1;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === nombreBuscado) {
            indice = i;
            break;
        }
    }

    console.log("Índice:", indice);
}
posicion();