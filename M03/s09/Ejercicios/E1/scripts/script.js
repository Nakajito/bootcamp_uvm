$(document).ready(function() {
    // Botón 1 - Alternar color entre dos colores (color1 y color2)
    $('#btn1').click(function() {
        $('.item').toggleClass('color1 color2');
    });

    // Botón 2 - Alternar entre bordes redondeados y no redondeados
    $('#btn2').click(function() {
        $('.item').toggleClass('rounded square');
    });

    // Botón 3 - Crear un nuevo div con los mismos atributos de los div anteriores
    $('#btn3').click(function() {
        // Crear un nuevo div con las mismas clases del primer div existente
        let newDiv = $('<div class="item"></div>');

        // Verificar el estado de color y borde del primer div
        if ($('.item').first().hasClass('color2')) {
            newDiv.addClass('color2');
        } else {
            newDiv.addClass('color1');
        }

        if ($('.item').first().hasClass('rounded')) {
            newDiv.addClass('rounded');
        } else {
            newDiv.addClass('square');
        }

        // Agregar el nuevo div al contenedor
        $('.main-container').append(newDiv);
    });
});