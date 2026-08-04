//3. Acumulador de suma: Escribe un ciclo que sume los números del 1 al 10 y muestre el total acumulado al finalizar

function acumuladorSuma() {
    let i = 1;
    let suma = 0;

    do {
        suma += i;
        i++;
    } while (i <= 10);

    console.log("Total:", suma);
}
acumuladorSuma();
