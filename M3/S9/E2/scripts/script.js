function CambiarColor() {
    let items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.style.backgroundColor = '#FD8B51';
    });
}

function borde() {
    let items = document.querySelectorAll('.item');
    items.forEach(function (item) {
        item.style.borderRadius = "20px";
    });
}

function nuevoDiv() {
    let nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('item');
    let mainContainer = document.getElementById('mainContainer');
    mainContainer.appendChild(nuevoDiv);
}
