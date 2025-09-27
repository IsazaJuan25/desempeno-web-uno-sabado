# Actividad Evaluativa: "Gestor de Inventario de Tienda" 📦

## Objetivo del proyecto
Desarrollar un simulador para la gestión del inventario de una pequeña tienda, utilizando funciones y lógica de control en JavaScript. A través de este proyecto, aplicarás tu conocimiento sobre la manipulación de variables numéricas, el uso de funciones con parámetros y la creación de un programa interactivo para controlar el stock de productos.

---

## Requisitos a evaluar
* **Funciones:** Uso correcto de funciones declarativas, de expresión y de tipo flecha.
* **Parámetros y Argumentos:** Enviar y recibir datos en las funciones para alterar el estado del inventario.
* **Condicionales:** Aplicar `if`, `else`, `else if` y `switch` para gestionar la disponibilidad de productos.
* **Ciclos:** Utilizar `for` y `while` para simular la actividad de la tienda y controlar el flujo del programa.
* **Control de Versiones (Git):** Documentar el progreso del proyecto a través de commits claros y descriptivos.

---

## Guía de Desarrollo Paso a Paso

### Fase 1: Configuración de la Tienda y el Inventario
En esta primera etapa, estableceremos las variables principales que representarán el inventario de nuestra tienda.

1.  **Prepara tu entorno:**
    * Hacer un fork de este repositorio.
    * Clonar el repositorio forkeado a tu máquina.
    * En el repositorio clonado, crear una carpeta con la siguiente estructura: `CC-NOMBRE-COMPLETO` (reemplazar con tus datos).
    * Dentro, crea un archivo `index.html` y un archivo `app.js`.
    * Enlaza `app.js` en tu archivo `index.html`.

2.  **Define las variables de estado:**
    * En `app.js`, pide al usuario el nombre de un producto con un `prompt` y guárdalo en `nombreProducto`.
    * Declara otras dos variables globales: `stockProducto` (inicia en 50) y `ventasTotales` (inicia en 0).

3.  **Crea la función para mostrar el inventario (Función Declarativa):**
    * Desarrolla una función declarativa llamada `mostrarInventario()`.
    * No recibirá parámetros.
    * Su tarea será mostrar en la consola el estado actual del inventario. Ej: `"Producto: [Nombre], Stock: 50 unidades, Ventas: 0 unidades."`.

**✅ Entrega 1:**
* Llama a la función `mostrarInventario()` para verificar que funciona.
* Realiza tu primer commit: `git commit -m "Fase 1: Configuración inicial e inventario de la tienda completados"`.

---

### Fase 2: Transacciones Básicas (Ventas y Reposición)
Ahora, vamos a permitir que se realicen las operaciones básicas de venta y reposición de stock.

1.  **Crea la función para registrar una venta (Función de Expresión):**
    * Crea una función de expresión (`const registrarVenta = function() {...}`).
    * Debe aceptar un parámetro: `cantidadVendida`.
    * **Condicional:** Si `cantidadVendida` es menor o igual al `stockProducto`, réstala del stock, súmala a `ventasTotales` y muestra un mensaje de éxito. Si no, muestra `"Stock insuficiente para esta venta."`.

2.  **Crea la función para reponer stock (Función Flecha):**
    * Crea una función flecha (`const reponerStock = (cantidadRepuesta) => {...}`).
    * Debe aceptar un parámetro: `cantidadRepuesta`.
    * Incrementa la variable `stockProducto` con la `cantidadRepuesta`.
    * Muestra un mensaje en consola. Ej: `"Se añadieron [cantidad] unidades. Nuevo stock: [stockProducto]."`.

**✅ Entrega 2:**
* Prueba tus nuevas funciones llamándolas con diferentes valores.
* Llama a `mostrarInventario()` al final para ver el resultado.
* Realiza tu segundo commit: `git commit -m "Fase 2: Implementadas funciones para ventas y reposición de stock"`.

---

### Fase 3: Lógica de Simulación y Diagnóstico
La aplicación ahora simulará un día de ventas y ofrecerá un diagnóstico sobre el estado del inventario.

1.  **Simula un día de ventas (Ciclo `for`):**
    * Crea una función flecha `simularDiaDeVentas()`.
    * Dentro, usa un ciclo `for` que se repita 5 veces (simulando 5 clientes). En cada iteración, llama a `registrarVenta` con una cantidad fija (ej. 8).

2.  **Verifica la salud del inventario (Condicional múltiple y `switch`):**
    * Crea una función declarativa `diagnosticoInventario()`.
    * **Condicional `if/else if/else`:** Basado en el `stockProducto`, muestra mensajes como `"Nivel de stock óptimo"`, `"Stock moderado, considera reponer pronto"` o `"¡Alerta! Bajo stock, reposición urgente"`.
    * **`switch`:** Basado en rangos de `ventasTotales`, muestra mensajes como `"Producto estrella, alta demanda"`, `"Ventas moderadas"` o `"Baja rotación del producto"`.

**✅ Entrega 3:**
* Llama a `simularDiaDeVentas()` y luego a `diagnosticoInventario()` para probar.
* Realiza tu tercer commit: `git commit -m "Fase 3: Añadida simulación de ventas y diagnóstico de inventario"`.

---

### Fase 4: El Menú Interactivo de la Tienda
Finalmente, integraremos todo en un menú principal para el usuario.

1.  **Crea la función principal de la aplicación:**
    * Desarrolla una función declarativa `iniciarGestion()`. Toda la lógica del menú irá dentro de esta función.
    * Dentro, crea un ciclo `while (true)` para que el menú se muestre de forma continua.

2.  **Implementa el menú de opciones:**
    * Dentro del `while`, usa un `prompt` para mostrar al usuario las siguientes opciones:
        ```
        Menú de Inventario:
        1 - Registrar Venta
        2 - Reponer Stock
        3 - Simular Día de Ventas
        4 - Ver Diagnóstico de Inventario
        5 - Mostrar Inventario Actual
        6 - Cerrar programa
        ```
    * Utiliza un `switch` para manejar la opción ingresada por el usuario.

3.  **Define la lógica para cada caso del `switch`:**
    * **Caso '1' (Venta):** Pide al usuario la cantidad vendida con otro `prompt` y llama a `registrarVenta()`. Recuerda convertir el valor a número.
    * **Caso '2' (Reponer):** Pide la cantidad a reponer y llama a `reponerStock()`.
    * **Caso '3' (Simular):** Simplemente llama a la función `simularDiaDeVentas()`.
    * **Caso '4' (Diagnóstico):** Llama a la función `diagnosticoInventario()`.
    * **Caso '5' (Inventario):** Llama a `mostrarInventario()`.
    * **Caso '6' (Salir):** Muestra un mensaje de despedida y usa `return` para salir del ciclo y finalizar el programa.
    * **`default`:** Muestra un mensaje de "Opción no válida".

**✅ Entrega Final:**
* Asegúrate de que el menú funciona y que cada opción llama a la función correcta.
* Al final de todo tu código en `app.js`, solo debe haber una llamada: `iniciarGestion()`.
* Realiza tu último commit: `git commit -m "Fase 4: Menú interactivo de gestión de inventario implementado"`.