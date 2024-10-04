function CambiarColor() {
    let items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.style.backgroundColor = '#FD8B51';
    });
}

function borde() {
    let items = document.querySelectorAll('.item');
    items.forEach(function (item) {
        item.style.borderRadius = "20px"
    });
}