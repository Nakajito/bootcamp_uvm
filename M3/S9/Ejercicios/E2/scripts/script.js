document.addEventListener('DOMContentLoaded', function() {
    // Botón 1 - Alternar color entre dos colores (color1 y color2)
    document.getElementById('btn1').addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        items.forEach(function(item) {
            if (item.classList.contains('color1')) {
                item.classList.remove('color1');
                item.classList.add('color2');
            } else {
                item.classList.remove('color2');
                item.classList.add('color1');
            }
        });
    });

    // Botón 2 - Alternar entre bordes redondeados y no redondeados
    document.getElementById('btn2').addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        items.forEach(function(item) {
            if (item.classList.contains('square')) {
                item.classList.remove('square');
                item.classList.add('rounded');
            } else {
                item.classList.remove('rounded');
                item.classList.add('square');
            }
        });
    });

    // Botón 3 - Crear un nuevo div con los mismos atributos de los div anteriores
    document.getElementById('btn3').addEventListener('click', function() {
        // Crear un nuevo div
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');

        // Obtener el estado del primer div
        let firstItem = document.querySelector('.item');

        if (firstItem.classList.contains('color2')) {
            newDiv.classList.add('color2');
        } else {
            newDiv.classList.add('color1');
        }

        if (firstItem.classList.contains('rounded')) {
            newDiv.classList.add('rounded');
        } else {
            newDiv.classList.add('square');
        }

        // Agregar el nuevo div al contenedor principal
        document.querySelector('.main-container').appendChild(newDiv);
    });
});