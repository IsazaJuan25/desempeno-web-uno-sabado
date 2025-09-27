
const nombreUsuario = prompt("Bienvenido por favor, ingresae su nombre:");

let saldo = 1000;
let gastosTotales = 0;
function mostrarBalance() {
    console.log(`Hola, ${nombreUsuario}, tu saldo es de: $${saldo}. Has gastado: $${gastosTotales}.`);
}
console.log("FASE 1: CONFIGURACIÓN INICIAL");
mostrarBalance();

const registrarIngreso = function(montoIngreso) {
    saldo += montoIngreso;
    console.log(`Ingreso de ${montoIngreso} registrado. Nuevo saldo: ${saldo}`);
};

const registrarGasto = (montoGasto) => {
    if (montoGasto <= saldo) {
        saldo -= montoGasto;
        gastosTotales += montoGasto;
        console.log(`Gasto de ${montoGasto} registrado. Nuevo saldo: ${saldo}`);
    } else {
        console.log("Fondos insuficientes para realizar este gasto.");
    }
};
