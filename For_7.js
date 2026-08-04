//7.	Interrupción con break: Crea un ciclo del 1 al 10 que se detenga inmediatamente y salga del bucle cuando el contador sea igual a 7.

function BreakSiete() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            break;
        }
        console.log(i);
    }
}
BreakSiete();