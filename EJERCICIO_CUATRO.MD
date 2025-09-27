# Actividad Evaluativa: "Simulador de Mascota Virtual" 🐾

## Objetivo del proyecto
Desarrollar un simulador interactivo para cuidar de una mascota virtual, gestionando sus necesidades básicas como el hambre y la felicidad. Mediante este proyecto, reforzarás tu dominio de funciones, lógica condicional y ciclos en JavaScript para crear un programa que reacciona a las acciones del usuario y al paso del tiempo.

---

## Requisitos a evaluar
* **Funciones:** Uso correcto de funciones declarativas, de expresión y de tipo flecha.
* **Parámetros y Argumentos:** Enviar y recibir datos en las funciones para alterar el estado de la mascota.
* **Condicionales:** Aplicar `if`, `else`, `else if` y `switch` para gestionar las necesidades y el humor de la mascota.
* **Ciclos:** Utilizar `for` y `while` para simular el paso del tiempo y controlar el flujo de la aplicación.
* **Control de Versiones (Git):** Documentar el progreso del proyecto a través de commits claros y descriptivos.

---

## Guía de Desarrollo Paso a Paso

### Fase 1: Creación de la Mascota y Estado Inicial
En esta fase, daremos vida a nuestra mascota virtual y definiremos sus atributos principales.

1.  **Prepara tu entorno:**
    * Hacer un fork de este repositorio.
    * Clonar el repositorio forkeado a tu máquina.
    * En el repositorio clonado, crear una carpeta con la siguiente estructura: `CC-NOMBRE-COMPLETO` (reemplazar con tus datos).
    * Dentro, crea un archivo `index.html` y un archivo `app.js`.
    * Enlaza `app.js` en tu archivo `index.html`.

2.  **Define las variables de estado:**
    * En `app.js`, pide al usuario el nombre de su mascota con un `prompt` y guárdalo en `nombreMascota`.
    * Declara otras dos variables globales: `nivelHambre` (inicia en 50, en una escala de 0 a 100) y `nivelFelicidad` (inicia en 50, de 0 a 100).

3.  **Crea la función para mostrar el estado (Función Declarativa):**
    * Desarrolla una función declarativa llamada `mostrarEstado()`.
    * No recibirá parámetros.
    * Su tarea será mostrar en la consola el estado actual de la mascota. Ej: `"Mascota: [Nombre], Hambre: 50/100, Felicidad: 50/100."`.

**✅ Entrega 1:**
* Llama a la función `mostrarEstado()` para verificar que funciona.
* Realiza tu primer commit: `git commit -m "Fase 1: Configuración inicial y estado de la mascota completados"`.

---

### Fase 2: Acciones Básicas de Cuidado
Ahora, implementaremos las interacciones fundamentales para cuidar de nuestra mascota.

1.  **Crea la función para alimentar (Función de Expresión):**
    * Crea una función de expresión (`const alimentar = function() {...}`).
    * Debe aceptar un parámetro: `puntosComida`.
    * Resta `puntosComida` a `nivelHambre`.
    * **Condicional:** Asegúrate de que `nivelHambre` no baje de 0. Si llega a 0, debe permanecer en 0.
    * Muestra un mensaje en consola. Ej: `"¡Ñam! El hambre de [Nombre] ha disminuido. Hambre: [nivelHambre]/100."`.

2.  **Crea la función para jugar (Función Flecha):**
    * Crea una función flecha (`const jugar = (puntosDiversion) => {...}`).
    * Debe aceptar un parámetro: `puntosDiversion`.
    * Suma `puntosDiversion` a `nivelFelicidad`.
    * **Condicional:** Asegúrate de que `nivelFelicidad` no supere 100.
    * Muestra un mensaje de éxito. Ej: `"¡Qué divertido! La felicidad de [Nombre] ha aumentado. Felicidad: [nivelFelicidad]/100."`.

**✅ Entrega 2:**
* Prueba tus nuevas funciones llamándolas con diferentes valores.
* Llama a `mostrarEstado()` al final para ver el resultado.
* Realiza tu segundo commit: `git commit -m "Fase 2: Implementadas funciones para alimentar y jugar con la mascota"`.

---

### Fase 3: Simulación del Tiempo y Diagnóstico
La mascota ahora tendrá necesidades que cambian con el tiempo y podremos obtener un diagnóstico de su estado.

1.  **Simula el paso del tiempo (Ciclo `for`):**
    * Crea una función flecha `simularPasoDelTiempo()`.
    * Dentro, usa un ciclo `for` que se repita 4 veces (simulando 4 horas). En cada iteración, aumenta `nivelHambre` en 10 y disminuye `nivelFelicidad` en 5.
    * Asegúrate de que los valores se mantengan dentro de los límites (0-100).
    * Al final del ciclo, muestra un mensaje como `"Han pasado algunas horas..."`.

2.  **Verifica el bienestar de la mascota (Condicional múltiple y `switch`):**
    * Crea una función declarativa `diagnosticoMascota()`.
    * **Condicional `if/else if/else`:** Basado en `nivelHambre`, muestra mensajes como `"Tu mascota está satisfecha"`, `"Tu mascota tiene algo de hambre"` o `"¡Alerta! Tu mascota está muy hambrienta"`.
    * **`switch`:** Basado en rangos de `nivelFelicidad`, muestra mensajes como `"Tu mascota está muy feliz y juguetona"`, `"Tu mascota está contenta"` o `"Tu mascota se siente un poco triste"`.

**✅ Entrega 3:**
* Llama a `simularPasoDelTiempo()` y luego a `diagnosticoMascota()` para probar.
* Realiza tu tercer commit: `git commit -m "Fase 3: Añadida simulación de tiempo y diagnóstico de la mascota"`.

---

### Fase 4: El Menú Interactivo de Cuidado
Finalmente, integraremos todo en un menú principal para el jugador.

1.  **Crea la función principal de la aplicación:**
    * Desarrolla una función declarativa `iniciarCuidado()`.
    * Dentro, crea un ciclo `while (true)` para que el menú se muestre de forma continua.

2.  **Implementa el menú de opciones:**
    * Dentro del `while`, usa un `prompt` para mostrar al usuario las siguientes opciones:
        ```
        Menú de Cuidado de Mascota:
        1 - Alimentar a la mascota
        2 - Jugar con la mascota
        3 - Simular el paso del tiempo
        4 - Ver diagnóstico de la mascota
        5 - Mostrar estado actual
        6 - Despedirse de la mascota
        ```
    * Utiliza un `switch` para manejar la opción ingresada por el usuario.

3.  **Define la lógica para cada caso del `switch`:**
    * **Caso '1' (Alimentar):** Pide al usuario la cantidad de comida con otro `prompt` y llama a `alimentar()`. Recuerda convertir el valor a número.
    * **Caso '2' (Jugar):** Pide los puntos de diversión y llama a `jugar()`.
    * **Caso '3' (Simular):** Llama a `simularPasoDelTiempo()`.
    * **Caso '4' (Diagnóstico):** Llama a `diagnosticoMascota()`.
    * **Caso '5' (Estado):** Llama a `mostrarEstado()`.
    * **Caso '6' (Salir):** Muestra un mensaje de despedida y usa `return` para salir del ciclo y finalizar el programa.
    * **`default`:** Muestra un mensaje de "Opción no válida".

**✅ Entrega Final:**
* Asegúrate de que el menú funciona y que cada opción llama a la función correcta.
* Al final de todo tu código en `app.js`, solo debe haber una llamada: `iniciarCuidado()`.
* Realiza tu último commit: `git commit -m "Fase 4: Menú interactivo de cuidado de mascota implementado"`.