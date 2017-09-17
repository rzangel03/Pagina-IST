$(document).ready(function() {
  $('.menu li:has(ul)').click(function(event) {
    event.preventDefault();
    if ($(this).hasClass('activado')) {
      $(this).removeClass('activado');
      $(this).children('ul').slideUp();
    } else {
      $('.menu li ul').slideUp();
      $('.menu li').removeClass('activado');
      $(this).addClass('activado');
      $(this).children('ul').slideDown();
    }
  });
    $('.btn-menu').click(function(){
        $('.contenedor-menu .menu').slideToggle();
    })
});
