$('#menu-button3').click(function(e){
    e.stopPropagation();
     $('#hide-menu3').toggleClass('show-menu3');
//    $('.menu-button3').toggleClass('active');
});
$('#hide-menu3').click(function(e){
    e.stopPropagation();
});
$('.cross1').click(function(e){
    e.stopPropagation();
    $('#hide-menu3').toggleClass('show-menu3');
});

