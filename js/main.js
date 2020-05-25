$(document).ready(function() {
    var imgItems = $('.slider li').length; // Numero de slides

    // Agregando paginacion --
    for (i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li><span class="material-icons">fiber_manual_record</span></li>')
    }
    //----------------------------

    $('.slider li').hide(); // Ocultanos todos los slides
    $('.slider li:first').show(); // Mostramos el primer slide
    $('.pagination li:first').css({ 'color': '#CD6E2E' }); // Damos estilos al primer item de la paginacion

    // Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);


    // FUNCIONES ======================================================================

    function pagination() {
        var paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child(' + paginationPos + ')').fadeIn();

        $('.pagination li').css({ 'color': '#858585' })
        $(this).css({ 'color': '#CD6E2E' });

    }


});