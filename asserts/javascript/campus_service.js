
    $('#menu-button1').click(function(e){
    e.stopPropagation();
     $('#hide-menu1').toggleClass('show-menu1');
    $('.menu-button1').toggleClass('active');
    $('.campusspan').toggleClass('active');
});
$('#hide-menu1').click(function(e){
    e.stopPropagation();
});
