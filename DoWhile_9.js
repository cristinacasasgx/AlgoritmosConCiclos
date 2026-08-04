//9. Formato de lista: Genera una secuencia de números del 1 al 20 que se impriman en una sola línea, concatenados con un guion ("-") entre ellos

function lista() {
    let i = 1;
    let resultado = "";

    do {
        resultado += i;
        if (i < 20) {
            resultado += "-";
        }
        i++;
    } while (i <= 20);

    console.log(resultado);
}
lista();