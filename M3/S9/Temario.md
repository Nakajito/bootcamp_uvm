# JQuery
jQuery es una biblioteca de JavaScript rápida, pequeña y rica en funciones, que simplifica tareas comunes de desarrollo web, como la manipulación del DOM (Document Object Model), la gestión de eventos, la animación y el uso de AJAX. Fue lanzada en 2006 por John Resig y se convirtió rápidamente en una herramienta muy popular para los desarrolladores web, ya que permite escribir menos código para lograr más funcionalidades en comparación con JavaScript puro.

# ¿Qué hace jQuery?

* **Simplificación del DOM:** Facilita la selección y manipulación de elementos HTML, haciéndolo más eficiente que el uso de JavaScript puro.

    ~~~ JS
    // Seleccionar y ocultar un elemento en JavaScript puro
    document.getElementById('miDiv').style.display = 'none';

    // Seleccionar y ocultar un elemento con jQuery
    $('#miDiv').hide();
    ~~~

* **Compatibilidad entre navegadores:** Uno de los mayores beneficios de jQuery es que resuelve problemas de compatibilidad entre diferentes navegadores, lo que era un gran desafío en los primeros años de desarrollo web.

* **Gestión de eventos:** jQuery facilita el manejo de eventos, como clics, teclas presionadas o movimientos del ratón.

    ~~~JS
    // JavaScript puro para manejar un evento click 
    document.getElementById('miBoton').addEventListener('click', function() {
        alert('¡Botón clickeado!');
    });

    // jQuery para manejar un evento click
    $('#miBoton').click(function() {
        alert('¡Botón clickeado!');
    });
    ~~~

* **Animaciones:** jQuery incluye métodos integrados para crear animaciones como mostrar, ocultar, deslizar o desvanecer elementos.
    ~~~ JS
    // Animar la opacidad de un elemento con jQuery
    $('#miDiv').fadeOut();
    ~~~

* **AJAX:** jQuery facilita el envío y recepción de datos del servidor sin recargar la página, utilizando AJAX.

    ~~~ JS
    $.ajax({
    url: 'mi-api.com/datos',
    method: 'GET',
    success: function(data) {
        console.log(data);
    }
    });
    ~~~

# Ventajas de jQuery

* **Escritura concisa:** El código que sería extenso en JavaScript puro se puede simplificar considerablemente con jQuery

* **Compatibilidad de navegadores:** Resuelve problemas de compatibilidad entre diferentes navegadores, especialmente en versiones antiguas.

* **Gran cantidad de plugins:** Existe una comunidad activa que ha creado muchos plugins que puedes integrar fácilmente para ampliar la funcionalidad de tu sitio web.

* **Fácil de aprender:** jQuery es fácil de aprender y utilizar, especialmente si ya tienes conocimientos básicos de JavaScript.

# Desventajas de jQuery

* **Dependencia de una librería externa:** A medida que las capacidades de JavaScript han mejorado, muchas tareas que solían requerir jQuery ahora se pueden realizar de manera eficiente con JavaScript puro.

* **Carga adicional:** Aunque jQuery es una biblioteca ligera, aún representa una carga adicional en el tiempo de carga de la página, especialmente si no se utiliza de manera eficiente.

* **Menor relevancia en proyectos modernos:** Hoy en día, con la llegada de frameworks y librerías más robustas como React, Vue.js y Angular, jQuery ha perdido popularidad en proyectos modernos y grandes.

# Instalar Jquery

1. Usar un CDN (Método más rápido y recomendado).

    Esta es la forma más sencilla y popular de usar jQuery. No es necesario descargar nada, solo incluir un enlace a la biblioteca directamente en el HTML.

    * Insertar el código dentro de la etiqueta `<head>` o antes de la etiqueta `</body>` del archivo HTML.

    ~~~ HTML
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo con jQuery</title>
    <!-- Incluir jQuery desde CDN -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>

        <h1>Ejemplo de instalación de jQuery</h1>
        <div id="miDiv">Este es un div</div>

        <script>
            // jQuery funcionando
            $(document).ready(function() {
                $('#miDiv').text('¡jQuery está funcionando!');
            });
        </script>
    </body>
    </html>
    ~~~

    * Ventajas de usar un CDN:

        * Tiempo de carga reducido, ya que los CDNs están optimizados.
        * Si el visitante ya ha cargado jQuery desde este CDN en otro sitio, puede usar la versión en caché.

2. Descargar jQuery y usarlo localmente

    * Descarga jQuery desde su sitio oficial: https://jquery.com/download/

        * En la página de descarga, existen dos opciones:
            * Versión comprimida (minified): Es más pequeña y recomendada para sitios en producción.
            * Versión sin comprimir: Es más grande y útil para depuración durante el desarrollo.
    * Colocar el archivo descargado en la carpeta del proyecto, generalmente en una subcarpeta llamada `js`.

    * Incluir el archivo de jQuery en el archivo HTML.

        ~~~ HTML
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ejemplo con jQuery local</title>
            <!-- Incluir jQuery desde archivo local -->
            <script src="js/jquery-3.7.1.min.js"></script>
        </head>
        <body>

            <h1>Ejemplo de instalación local de jQuery</h1>
            <div id="miDiv">Este es un div</div>

            <script>
                // jQuery funcionando
                $(document).ready(function() {
                    $('#miDiv').text('¡jQuery está funcionando localmente!');
                });
            </script>

        </body>
        </html>

        ~~~
        
        * Ventajas de usar jQuery localmente
            * Control sobre la versión exacta de jQuery.
            * Funciona sin conexión a Internet.

3. Usar un gestor de paquetes (npm o yarn)

Si se está trabajando en un proyecto con **Node.js** o un entorno basado en módulos, es posible instalar jQuery utilizando un gestor de paquetes como `npm` o `yarn`.

*  Instalación con npm.
    - Tener instalado Node.js en el sistema.
    - Ejecutar el siguiente comando en la terminal para instalar jQuery:
        ~~~ bash
        npm install jquery
        ~~~

    - Se puede requerir jQuery en en archivo JavaScript:

        ~~~ javascript
        const $ = require('jquery');
        // Usar jQuery en el proyecto
        $(document).ready(function() {
            $('#miDiv').text('¡jQuery instalado con npm está funcionando!');
        });
        ~~~

* Instalación con Yarn.

    - Utilizando Yarn, se puede instalar jQuery con este comando:
        ~~~ bash
        yarn add jquery
        ~~~

# Verificar que jQuery está funcionando

Después de instalar jQuery con cualquiera de los métodos anteriores, se puede verificar que está funcionando correctamente usando este pequeño script:

~~~ javascript
    $(document).ready(function() {
        alert('¡jQuery está funcionando!');
    });
~~~

Si se observa una alerta cuando se carga la página, significa que jQuery está correctamente instalado y funcionando.

>[!IMPORTANT]
>- Usar un CDN es la forma más rápida de empezar.
>- Descargar jQuery y utilizarlo localmente te da más control, útil cuando trabajas offline.
>- En proyectos basados en Node.js, puedes gestionar dependencias usando npm o yarn.

# Tipos de Selectores en jQuery

| **Selector**              | **Descripción**                                              | **Ejemplo**                              |
|---------------------------|--------------------------------------------------------------|------------------------------------------|
| `$('tag')`                | Selecciona todos los elementos de una etiqueta específica.    | `$('p')` selecciona todos los `<p>`.     |
| `$('#id')`                | Selecciona el elemento con un id específico.                 | `$('#miDiv')` selecciona el elemento con id `miDiv`. |
| `$('.class')`             | Selecciona todos los elementos con una clase específica.      | `$('.miClase')` selecciona todos los elementos con la clase `miClase`. |
| `$('tag.class')`          | Selecciona los elementos de una etiqueta con una clase.       | `$('p.miClase')` selecciona los `<p>` con la clase `miClase`. |
| `$('parent > child')`      | Selecciona los hijos directos de un elemento.                 | `$('ul > li')` selecciona los `<li>` hijos directos de `<ul>`. |
| `$('ancestor descendant')` | Selecciona todos los descendientes de un elemento.            | `$('div p')` selecciona todos los `<p>` dentro de un `<div>`. |
| `$('tag:first')`          | Selecciona el primer elemento de un tipo específico.          | `$('p:first')` selecciona el primer `<p>`. |
| `$('tag:last')`           | Selecciona el último elemento de un tipo específico.          | `$('p:last')` selecciona el último `<p>`. |
| `$('tag:nth-child(n)')`   | Selecciona el enésimo hijo de un elemento.                   | `$('li:nth-child(2)')` selecciona el segundo `<li>`. |
| `$('tag:odd')`            | Selecciona los elementos en posiciones impares.               | `$('li:odd')` selecciona los `<li>` en posiciones impares. |
| `$('tag:even')`           | Selecciona los elementos en posiciones pares.                | `$('li:even')` selecciona los `<li>` en posiciones pares. |
| `$('input[name="name"]')` | Selecciona los elementos `input` con un atributo `name` específico. | `$('input[name="email"]')` selecciona el `input` cuyo `name` es `email`. |
| `$('tag:hidden')`         | Selecciona los elementos ocultos.                            | `$('div:hidden')` selecciona todos los `<div>` ocultos. |
| `$('tag:visible')`        | Selecciona los elementos visibles.                           | `$('div:visible')` selecciona todos los `<div>` visibles. |
| `$('element:focus')`      | Selecciona el elemento que tiene el foco.                    | `$('input:focus')` selecciona el `input` con el foco. |
| `$('selector1, selector2')`| Selecciona elementos combinados.                             | `$('h1, h2, p')` selecciona todos los `<h1>`, `<h2>` y `<p>`. |


>[!NOTE]
Esta tabla incluye una descripción y un ejemplo para cada uno de los selectores de jQuery más utilizados.

# Eventos JQuery

| **Evento**        | **Descripción**                                                  | **Ejemplo**                                                    |
|-------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| `click()`         | Se activa cuando se hace clic en un elemento.                    | `$('#miDiv').click(function() { alert('Click!'); });`           |
| `dblclick()`      | Se activa cuando se hace doble clic en un elemento.              | `$('#miDiv').dblclick(function() { alert('Doble Click!'); });`  |
| `mouseenter()`    | Se activa cuando el mouse entra en el área de un elemento.       | `$('#miDiv').mouseenter(function() { $(this).css('color', 'red'); });` |
| `mouseleave()`    | Se activa cuando el mouse sale del área de un elemento.          | `$('#miDiv').mouseleave(function() { $(this).css('color', 'blue'); });` |
| `mouseover()`     | Se activa cuando el mouse pasa por encima de un elemento.        | `$('#miDiv').mouseover(function() { $(this).css('background', 'yellow'); });` |
| `mouseout()`      | Se activa cuando el mouse deja de estar sobre un elemento.       | `$('#miDiv').mouseout(function() { $(this).css('background', 'white'); });` |
| `keydown()`       | Se activa cuando se presiona una tecla mientras un elemento tiene el foco. | `$(document).keydown(function(e) { console.log(e.key); });`   |
| `keyup()`         | Se activa cuando se suelta una tecla mientras un elemento tiene el foco.   | `$(document).keyup(function(e) { console.log(e.key); });`     |
| `keypress()`      | Se activa cuando se presiona una tecla (excepto teclas especiales). | `$(document).keypress(function(e) { console.log(e.key); });`  |
| `focus()`         | Se activa cuando un elemento obtiene el foco.                    | `$('input').focus(function() { $(this).css('border', '2px solid red'); });` |
| `blur()`          | Se activa cuando un elemento pierde el foco.                     | `$('input').blur(function() { $(this).css('border', '1px solid black'); });` |
| `submit()`        | Se activa cuando se envía un formulario.                         | `$('form').submit(function(e) { e.preventDefault(); alert('Enviado!'); });` |
| `change()`        | Se activa cuando cambia el valor de un elemento de formulario.    | `$('input').change(function() { alert('Valor cambiado!'); });` |
| `resize()`        | Se activa cuando cambia el tamaño de la ventana del navegador.    | `$(window).resize(function() { console.log('Ventana redimensionada'); });` |
| `scroll()`        | Se activa cuando se hace scroll en un elemento.                  | `$(window).scroll(function() { console.log('Scrolling...'); });` |
| `load()`          | Se activa cuando un elemento (como una imagen) ha sido cargado.  | `$(window).load(function() { alert('Página cargada!'); });`     |
| `unload()`        | Se activa cuando la página se descarga (evento obsoleto en HTML5).| `$(window).unload(function() { alert('Página cerrada!'); });`   |
| `ready()`         | Se activa cuando el DOM está completamente cargado y listo.      | `$(document).ready(function() { alert('DOM listo!'); });`       |
| `hover()`         | Se activa cuando el mouse entra y sale de un elemento (combina `mouseenter` y `mouseleave`). | `$('#miDiv').hover(function() { $(this).css('color', 'green'); }, function() { $(this).css('color', 'black'); });` |
| `on()`            | Asocia uno o más eventos a los elementos seleccionados.          | `$('p').on('click', function() { alert('Parrafo clickeado!'); });` |
| `off()`           | Elimina un evento previamente asociado.                          | `$('p').off('click');`                                          |

>[!NOTE]
Esta tabla incluye algunos de los eventos más importantes de jQuery con una breve descripción y un ejemplo para cada uno.





>[!CAUTION]
jQuery fue una herramienta crucial durante la evolución del desarrollo web, facilitando tareas comunes y resolviendo problemas de compatibilidad entre navegadores. Sin embargo, con el avance de JavaScript y la popularidad de frameworks modernos, su uso ha disminuido en proyectos actuales, aunque sigue siendo útil en sitios web pequeños o en aquellos que no requieren tecnologías más avanzadas.

