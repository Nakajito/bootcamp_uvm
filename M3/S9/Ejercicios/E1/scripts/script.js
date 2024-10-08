$(Document).ready(function(){

    $('#color').click(function(){
        $('.item').toggleClass("color1 color2");
    });

    $('#borde').click(function(){
        $('.item').toggleClass("square rounded")
    });

    $('#nuevo').click(function () {
        $('.main-container').append('<div class="item color1 square"></div>');
    });

});