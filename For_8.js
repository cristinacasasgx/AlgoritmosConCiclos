//8.	Salto con continue: Escribe un bucle que cuente del 1 al 10, pero que se salte la impresión del número 5 y continúe con los demás.

function saltoContinue() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}
saltoContinue();
