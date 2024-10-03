$(Document).ready(function(){

    const $nuevoDiv = $('<div class="item"></div>');

    $('#color').click(function(){
        $('.item').css({'background-color': 'red'});
    });

    $('#borde').click(function(){
        $('.item').css({'border-radius':'30px'})
    });

    $('#nuevo').click(function () {
        $('.main-container').append($nuevoDiv);
    });

});