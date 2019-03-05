   $(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
          
         $('.menu-button').fadeOut();
         $('.menu-button1').fadeOut();
         $('.menu-button2').fadeOut();
         $('.menu-button4').fadeOut();
         $('#mySidenav').fadeOut();
          $('.togglebutton').css({"right": "0", "transition-duration": "1s"});
         $('.wrapper0').css({"display":"block"});
     }
   
    else
     {
      $('.menu-button').fadeIn();
         $('.menu-button1').fadeIn();
         $('.menu-button2').fadeIn();
         $('.menu-button4').fadeIn();
         $('#mySidenav').fadeIn();
          $('.togglebutton').css({"right": "12%", "transition-duration": "1s"});
         $('.wrapper0').css({"display":"none"});
     }
 });
