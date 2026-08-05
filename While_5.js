//5. Lista con Espacios: Genera una secuencia de números del 1 al 10 que aparezcan en una sola línea, concatenando cada número con un espacio en blanco

function listaConEspacios() {
    let contador = 1;
    let lista = "";

    while (contador <= 10) {
        lista += contador + " ";
        contador++;
    }

    console.log(lista);
}
listaConEspacios();
