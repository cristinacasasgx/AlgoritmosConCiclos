// 5.	Acumulación de valores: Crea un programa que sume todos los números enteros del 1 al 5 y muestre el resultado total al finalizar el ciclo.

function suma1al5() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        suma += i;
    }
    console.log("Total:", suma);
}
suma1al5();
