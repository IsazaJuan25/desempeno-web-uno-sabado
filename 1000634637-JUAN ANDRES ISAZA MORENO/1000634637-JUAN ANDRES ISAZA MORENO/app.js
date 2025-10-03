
const nombreUsuario = prompt("Bienvenido por favor, ingrese su nombre:");

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

const simularSemana = () => {
    console.log("simulando semana de gasto:");
    for (let dia = 1; dia <= 7; dia++){
        console.log(`Día ${dia}:Gastando $50`);
        registrarGasto(50)
    } 
    console.log("Semana simulada.");
}

function diagnosticoFinanciero() {
    console.log("DIAGNÓSTICO FINANCIERO");
    if (saldo >= 1000) {
        console.log("Buen diagnóstico financiero.");
}else if (saldo >= 500){
        console.log("Diagnóstico financiero regular.");
}else if (saldo >= 100){
        console.log("Diagnóstico financiero malo.");
}else {
        console.log("Diagnóstico financiero crítico.");
}
let rangoGastos;
    if (gastosTotales <=200) {
        rangoGastos = "bajo";
    } else if (gastosTotales <=500) {
        rangoGastos = "medio";
    } else {
        rangoGastos = "alto";
    }
    switch (rangoGastos) {
        case "bajo":
            console.log("Tus gastos totales son bajos.");
            break;
        case "medio":
            console.log("Tus gastos totales son medios.");
            break;
        case "alto":
            console.log("Tus gastos totales son altos.");
            break;
        default:
            console.log("No se pudo determinar el rango de gastos.");
            break;
    }
}
