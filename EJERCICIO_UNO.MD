# Actividad Evaluativa: "Mini-App de Control de Gastos" 💸

## Objetivo del proyecto
Desarrollar una simulación interactiva de una app de finanzas personales utilizando funciones y lógica de control en JavaScript. A través de este proyecto, demostrarás tu comprensión sobre la declaración y uso de funciones, el manejo de parámetros y la aplicación de estructuras condicionales y ciclos para crear un programa dinámico y controlado por el usuario.

---

## Requisitos a evaluar
* **Funciones:** Uso correcto de funciones declarativas, de expresión y de tipo flecha.
* **Parámetros y Argumentos:** Enviar y recibir datos en las funciones para alterar el estado financiero.
* **Condicionales:** Aplicar `if`, `else`, `else if` y `switch` para gestionar el saldo y las decisiones.
* **Ciclos:** Utilizar `for` y `while` para simular el paso del tiempo y controlar el flujo de la aplicación.
* **Control de Versiones (Git):** Documentar el progreso del proyecto a través de commits claros y descriptivos.

---

## Guía de Desarrollo Paso a Paso
Sigue estas fases en orden. Al finalizar cada una, deberás realizar un commit en Git con un mensaje que describa el avance logrado.

### Fase 1: Configuración Inicial y Estado Financiero
En esta primera etapa, crearemos la base del proyecto y definiremos las variables principales de nuestra app.

1.  **Prepara tu entorno:**
    * Hacer un fork de este repositorio.
    * Clonar el repositorio forkeado a tu máquina.
    * En el repositorio clonado, crear una carpeta con la siguiente estructura: `CC-NOMBRE-COMPLETO` (reemplazar con tus datos).
    * Dentro, crea un archivo `index.html` y un archivo `app.js`.
    * Enlaza `app.js` en tu archivo `index.html`.

2.  **Define las variables de estado:**
    * En `app.js`, pide al usuario su nombre con un `prompt` y guárdalo en una variable `nombreUsuario`.
    * Declara otras dos variables globales: `saldo` (inicia en 1000) y `gastosTotales` (inicia en 0).

3.  **Crea la función para mostrar el balance (Función Declarativa):**
    * Desarrolla una función declarativa llamada `mostrarBalance()`.
    * No recibirá parámetros.
    * Su tarea será mostrar en la consola el estado financiero actual. Ej: `"Hola, [Nombre], tu saldo es de: $1000. Has gastado: $0."`.

**✅ Entrega 1:**
* Llama a la función `mostrarBalance()` para verificar que funciona.
* Realiza tu primer commit:
    ```bash
    git commit -m "Fase 1: Configuración inicial y estado financiero completado"
    ```

---

### Fase 2: Transacciones Básicas
Ahora, vamos a permitir que el usuario realice transacciones básicas.

1.  **Crea la función para registrar ingresos (Función de Expresión):**
    * Crea una función de expresión (`const registrarIngreso = function() {...}`).
    * Debe aceptar un parámetro: `montoIngreso`.
    * Incrementa la variable `saldo` con el `montoIngreso`.
    * Muestra un mensaje en consola. Ej: `"Ingreso de $[monto] registrado. Nuevo saldo: $[saldo]"`.

2.  **Crea la función para registrar gastos (Función Flecha):**
    * Crea una función flecha (`const registrarGasto = (montoGasto) => {...}`).
    * Debe aceptar un parámetro: `montoGasto`.
    * **Condicional:** Si `montoGasto` es menor o igual al `saldo`, réstalo del `saldo`, súmalo a `gastosTotales` y muestra un mensaje de éxito. Si no, muestra `"Fondos insuficientes"`.

**✅ Entrega 2:**
* Prueba tus nuevas funciones llamándolas con diferentes valores.
* Llama a `mostrarBalance()` al final para ver el resultado.
* Realiza tu segundo commit:
    ```bash
    git commit -m "Fase 2: Implementadas funciones para ingresos y gastos"
    ```

---

### Fase 3: Lógica de Simulación y Diagnóstico
La aplicación ahora simulará el paso del tiempo y dará un diagnóstico financiero.

1.  **Simula una semana de gastos (Ciclo `for`):**
    * Crea una función flecha `simularSemana()`.
    * Dentro, usa un ciclo `for` que se repita 7 veces. En cada iteración, llama a `registrarGasto` con un monto fijo (ej. 50).

2.  **Verifica la salud financiera (Condicional múltiple y `switch`):**
    * Crea una función declarativa `diagnosticoFinanciero()`.
    * **Condicional `if/else if/else`:** Basado en el `saldo`, muestra mensajes como `"Tu salud financiera es excelente"`, `"puedes mejorar"` o `"Alerta: fondos bajos"`.
    * **`switch`:** Basado en rangos de `gastosTotales`, muestra mensajes como `"Has gastado mucho"`, `"Tus gastos son moderados"` o `"Has sido muy cuidadoso"`.

**✅ Entrega 3:**
* Llama a `simularSemana()` y luego a `diagnosticoFinanciero()` para probar.
* Realiza tu tercer commit:
    ```bash
    git commit -m "Fase 3: Añadida simulación semanal y diagnóstico financiero"
    ```

---

### Fase 4: El Menú Interactivo (Ciclo `while`)
Finalmente, integraremos todo en un menú principal que le dé el control al usuario.

1.  **Crea la función principal de la aplicación:**
    * Desarrolla una función declarativa `iniciarApp()`. Toda la lógica del menú irá dentro de esta función.
    * Dentro, crea un ciclo `while (true)` para que el menú se muestre de forma continua.

2.  **Implementa el menú de opciones:**
    * Dentro del `while`, usa un `prompt` para mostrar al usuario las siguientes opciones:
        ```
        Menú de Control de Gastos:
        1 - Registrar un Ingreso
        2 - Registrar un Gasto
        3 - Simular una Semana de Gastos
        4 - Ver Diagnóstico Financiero
        5 - Mostrar Balance Actual
        6 - Salir
        ```
    * Utiliza un `switch` para manejar la opción ingresada por el usuario.

3.  **Define la lógica para cada caso del `switch`:**
    * **Caso '1' (Ingreso):** Pide al usuario el monto a ingresar con otro `prompt` y llama a tu función `registrarIngreso()` pasándole ese monto. Recuerda convertir el valor a número.
    * **Caso '2' (Gasto):** Similar al anterior, pide el monto del gasto y llama a `registrarGasto()`.
    * **Caso '3' (Simular):** Simplemente llama a la función `simularSemana()`.
    * **Caso '4' (Diagnóstico):** Llama a la función `diagnosticoFinanciero()`.
    * **Caso '5' (Balance):** Llama a la función `mostrarBalance()`.
    * **Caso '6' (Salir):** Muestra un mensaje de despedida en la consola y usa la palabra clave `return` o `break` para salir del ciclo `while` y finalizar el programa.
    * **`default`:** Muestra un mensaje de `"Opción no válida"`.

**✅ Entrega Final:**
* Asegúrate de que el menú funciona y que cada opción llama a la función correcta.
* Al final de todo tu código en `app.js`, solo debe haber una llamada: `iniciarApp()`.
* Realiza tu último commit:
    ```bash
    git commit -m "Fase 4: Menú interactivo implementado"
    ```