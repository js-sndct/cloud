//slick-slider

$(function (){
  $('.slider').slick({
    infinite: true,
    prevArrow: '<img class="arrow prevarrow" src="../img/prevarrow.png" alt="">',
    nextArrow: '<img class="arrow nextarrow" src="../img/nextarrow.png" alt="">',
  });
});

// wow
new WOW().init();


// accordeon
$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
  $('#accordeon .acc-head').on('click', f_acc,);
});

function f_acc(){
  $('acc-head').toggleClass('close')
  //скрываем все кроме того, что должны открыть
  $('#accordeon .acc-body').not($(this).next()).slideUp(500);
  // открываем или скрываем блок под заголовком, по которому кликнули
  $(this).next().slideToggle(500);
};


$(function(){
  $('#video__btn').on('click', function(){
    $('#videoplayer').slideToggle(1500);
  });
});
//videolplayer
$(function(){
  $('').on('click', function(){
    $('.menu-comm').show(500);
  });
});
