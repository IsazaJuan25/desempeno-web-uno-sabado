
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

function iniciarApp() {
    console.log(`Bienvenido a tu App de Control de Gastos, ${nombreUsuario}`);
    console.log("Usa el menú interactivo para gestionar tus finanzas.");
    
    while (true) {
        const opcion = prompt(`
 MENÚ DE CONTROL DE GASTOS

Hola ${nombreUsuario}, ¿qué deseas hacer?

1 - Registrar un Ingreso
2 - Registrar un Gasto  
3 - Simular una Semana de Gastos
4 - Ver Diagnóstico Financiero
5 - Mostrar Balance Actual
6 - Salir

Ingresa el número de tu opción:`);

        switch (opcion) {
            case '1':
                const montoIngreso = Number(prompt("¿Cuánto dinero deseas ingresar?"));
                if (!isNaN(montoIngreso) && montoIngreso > 0) {
                    registrarIngreso(montoIngreso);
                } else {
                    console.log("Por favor ingrese un monto válido.");
                }
                break;
                
            case '2':
                const montoGasto = Number(prompt("¿Cuánto dinero vas a gastar?"));
                if (!isNaN(montoGasto) && montoGasto > 0) {
                    registrarGasto(montoGasto);
                } else {
                    console.log("Por favor ingrese un monto válido.");
                }
                break;
                
            case '3':
                simularSemana();
                break;
                
            case '4':
                diagnosticoFinanciero();
                break;
                
            case '5':
                mostrarBalance();
                break;
                
            case '6':
                console.log(`Hasta luego, ${nombreUsuario}! Gracias por usar la App de Control de Gastos.`);
                return;
                
            default:
                console.log("Opción no válida. Por favor selecciona una opción del 1 al 6.");
        }
        
        
        console.log("\n" + "=".repeat(50) + "\n");
    }
}


console.log("FASE 1: CONFIGURACIÓN INICIAL");
mostrarBalance();

console.log("FASE 2: TRANSACCIONES BÁSICAS");
registrarIngreso(500);
registrarGasto(200);
registrarGasto(1500);
mostrarBalance();

console.log("FASE 3: SIMULACIÓN Y DIAGNÓSTICO");
simularSemana();
mostrarBalance();
diagnosticoFinanciero();

iniciarApp();