$('#menu-button2').click(function(e){
    e.stopPropagation();
     $('#hide-menu2').toggleClass('show-menu2');
    $('.menu-button2').toggleClass('active');
    $('.newspan').toggleClass('active');
});
$('#hide-menu2').click(function(e){
    e.stopPropagation();
});
