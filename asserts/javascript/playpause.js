function playpause() {
    var video = document.getElementById("video2");

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
    
     var img = document.getElementById('infoToggler1').src;
        if (img.indexOf('asserts/images/play_pause-512%20(1).png')!=-1) {
            document.getElementById('infoToggler1').src  = 'asserts/images/play_pause-512.png';
        }
         else {
           document.getElementById('infoToggler1').src = 'asserts/images/play_pause-512%20(1).png';
       }
}