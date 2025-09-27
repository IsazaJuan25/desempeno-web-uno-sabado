# Actividad Evaluativa: "Gestor de Héroe RPG"

## Objetivo del proyecto
Desarrollar una simulación interactiva para gestionar las estadísticas de un héroe de un juego de rol (RPG) utilizando funciones y lógica de control en JavaScript. A través de este proyecto, demostrarás tu comprensión sobre la declaración y uso de funciones, el manejo de parámetros y la aplicación de estructuras condicionales y ciclos para crear un programa dinámico.

---

## Requisitos a evaluar
* **Funciones:** Uso correcto de funciones declarativas, de expresión y de tipo flecha.
* **Parámetros y Argumentos:** Enviar y recibir datos en las funciones para alterar las estadísticas del héroe.
* **Condicionales:** Aplicar `if`, `else`, `else if` y `switch` para gestionar la salud y el estado del héroe.
* **Ciclos:** Utilizar `for` y `while` para simular eventos y controlar el flujo de la aplicación.
* **Control de Versiones (Git):** Documentar el progreso del proyecto a través de commits claros y descriptivos.

---

## Guía de Desarrollo Paso a Paso

### Fase 1: Creación del Héroe y Estado Inicial
En esta primera etapa, crearemos la base del proyecto y definiremos las estadísticas principales de nuestro héroe.

1.  **Prepara tu entorno:**
    * Hacer un fork de este repositorio.
    * Clonar el repositorio forkeado a tu máquina.
    * En el repositorio clonado, crear una carpeta con la siguiente estructura: `CC-NOMBRE-COMPLETO` (reemplazar con tus datos).
    * Dentro, crea un archivo `index.html` y un archivo `app.js`.
    * Enlaza `app.js` en tu archivo `index.html`.

2.  **Define las variables de estado:**
    * En `app.js`, pide al usuario el nombre de su héroe con un `prompt` y guárdalo en una variable `nombreHeroe`.
    * Declara otras dos variables globales: `puntosSalud` (inicia en 100) y `puntosExperiencia` (inicia en 0).

3.  **Crea la función para mostrar estadísticas (Función Declarativa):**
    * Desarrolla una función declarativa llamada `mostrarEstadisticas()`.
    * No recibirá parámetros.
    * Su tarea será mostrar en la consola el estado actual del héroe. Ej: `"Héroe: [Nombre], Salud: 100 HP, Experiencia: 0 XP."`.

**✅ Entrega 1:**
* Llama a la función `mostrarEstadisticas()` para verificar que funciona.
* Realiza tu primer commit: `git commit -m "Fase 1: Configuración inicial y estadísticas del héroe completadas"`.

---

### Fase 2: Acciones Básicas del Héroe
Ahora, vamos a permitir que el héroe interactúe con su entorno a través de acciones básicas.

1.  **Crea la función para recibir daño (Función de Expresión):**
    * Crea una función de expresión (`const recibirDanio = function() {...}`).
    * Debe aceptar un parámetro: `cantidadDanio`.
    * Resta la `cantidadDanio` a la variable `puntosSalud`.
    * Añade un condicional para que la salud nunca sea menor que 0. Si llega a 0, muestra un mensaje como `"¡Has sido derrotado!"`.
    * Muestra un mensaje en consola. Ej: `"Recibiste [cantidad] de daño. Salud restante: [puntosSalud] HP."`.

2.  **Crea la función para ganar experiencia (Función Flecha):**
    * Crea una función flecha (`const ganarExperiencia = (cantidadExp) => {...}`).
    * Debe aceptar un parámetro: `cantidadExp`.
    * Suma la `cantidadExp` a la variable `puntosExperiencia`.
    * Muestra un mensaje de éxito. Ej: `"¡Ganaste [cantidad] de experiencia! XP total: [puntosExperiencia]."`.

**✅ Entrega 2:**
* Prueba tus nuevas funciones llamándolas con diferentes valores.
* Llama a `mostrarEstadisticas()` al final para ver el resultado.
* Realiza tu segundo commit: `git commit -m "Fase 2: Implementadas funciones para recibir daño y ganar experiencia"`.

---

### Fase 3: Lógica de Simulación y Diagnóstico
La aplicación ahora simulará una batalla y dará un diagnóstico sobre el estado del héroe.

1.  **Simula una batalla (Ciclo `for`):**
    * Crea una función flecha `simularBatalla()`.
    * Dentro, usa un ciclo `for` que se repita 3 veces (3 turnos de batalla). En cada iteración, llama a `recibirDanio` con un monto fijo (ej. 25).
    * Al final del ciclo, si el héroe sigue con vida (`puntosSalud > 0`), llama a `ganarExperiencia` con un valor fijo (ej. 50).

2.  **Verifica el estado del héroe (Condicional múltiple y `switch`):**
    * Crea una función declarativa `diagnosticoHeroe()`.
    * **Condicional `if/else if/else`:** Basado en los `puntosSalud`, muestra mensajes como `"Tu salud es excelente"`, `"Estás herido, considera usar una poción"` o `"¡Peligro! Salud crítica"`.
    * **`switch`:** Basado en rangos de `puntosExperiencia`, muestra mensajes como `"Eres un novato"`, `"Te estás convirtiendo en un guerrero respetable"` o `"Eres una leyenda viviente"`.

**✅ Entrega 3:**
* Llama a `simularBatalla()` y luego a `diagnosticoHeroe()` para probar.
* Realiza tu tercer commit: `git commit -m "Fase 3: Añadida simulación de batalla y diagnóstico del héroe"`.

---

### Fase 4: El Menú Interactivo de Aventura
Finalmente, integraremos todo en un menú principal para el jugador.

1.  **Crea la función principal de la aplicación:**
    * Desarrolla una función declarativa `iniciarAventura()`. Toda la lógica del menú irá dentro de esta función.
    * Dentro, crea un ciclo `while (true)` para que el menú se muestre de forma continua.

2.  **Implementa el menú de opciones:**
    * Dentro del `while`, usa un `prompt` para mostrar al usuario las siguientes opciones:
        ```
        Menú de Aventura:
        1 - Luchar contra un monstruo
        2 - Tomar poción de salud
        3 - Completar misión (ganar XP)
        4 - Ver diagnóstico del Héroe
        5 - Mostrar Estadísticas
        6 - Retirarse de la aventura
        ```
    * Utiliza un `switch` para manejar la opción ingresada por el usuario.

3.  **Define la lógica para cada caso del `switch`:**
    * **Caso '1' (Luchar):** Llama a la función `simularBatalla()`.
    * **Caso '2' (Poción):** Pide al usuario con otro `prompt` cuántos puntos de salud quiere restaurar, convierte el valor a número y súmalo a `puntosSalud`.
    * **Caso '3' (Misión):** Pide al usuario la cantidad de XP ganada y llama a `ganarExperiencia()`.
    * **Caso '4' (Diagnóstico):** Llama a la función `diagnosticoHeroe()`.
    * **Caso '5' (Estadísticas):** Llama a `mostrarEstadisticas()`.
    * **Caso '6' (Retirarse):** Muestra un mensaje de despedida en la consola y usa `return` para salir del ciclo y finalizar el programa.
    * **`default`:** Muestra un mensaje de "Opción no válida".

**✅ Entrega Final:**
* Asegúrate de que el menú funciona y que cada opción llama a la función correcta.
* Al final de todo tu código en `app.js`, solo debe haber una llamada: `iniciarAventura()`.
* Realiza tu último commit: `git commit -m "Fase 4: Menú interactivo de aventura implementado"`.