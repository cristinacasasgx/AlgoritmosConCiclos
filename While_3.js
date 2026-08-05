// 3. Suma Acumulada: Escribe un ciclo que sume los números del 1 al 5 (1+2+3+4+5) y muestre el resultado total al final de la ejecución

function sumaAcumulada() {
    let contador = 1;
    let suma = 0;

    while (contador <= 5) {
        suma += contador;
        contador++;
    }

    console.log("Resultado total:", suma);
}
sumaAcumulada();
