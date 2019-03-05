$(document).ready(function () {
            $('#firstdiv').on('click',function(){
                $('html,body').animate({
                    scrollTop: $("#block2").offset().top},
                    'slow');
                $('.b1').toggleClass('active');
                $('.b2').removeClass('active');
                $('.b3').removeClass('active');
                $('.b4').removeClass('active');

            })
          $('#seconddiv').on('click',function(){
                $('html,body').animate({
                    scrollTop: $("#block3").offset().top},
                    'slow');
                $('.b1').removeClass('active');
               $('.b2').toggleClass('active');
              $('.b3').removeClass('active');
              $('.b4').removeClass('active');
            })
          $('#thirddiv').on('click',function(){
                $('html,body').animate({
                    scrollTop: $("#block4").offset().top},
                    'slow');
                $('.b1').removeClass('active');
               $('.b3').toggleClass('active');
              $('.b2').removeClass('active');
              $('.b4').removeClass('active');
            })
          $('#fourthdiv').on('click',function(){
                $('html,body').animate({
                    scrollTop: $("#block5").offset().top},
                    'slow');
                $('.b1').removeClass('active');
               $('.b4').toggleClass('active');
              $('.b2').removeClass('active');
              $('.b3').removeClass('active');
            })
          });
