


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var x = document.getElementById("span1");
    x.style.display=="none";
    x.style.backgroundColor="#111";
    x.style.opacity = "0";
    
    var y = document.getElementById("video2");
    y.style.opacity=0.3;
    
//    var z = document.getElementById("body1");
//    z.style.position="fixed";
//    

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
    var x = document.getElementById("span1");
    x.style.backgroundColor="black";
    x.style.opacity = "0.3";
    
    var y = document.getElementById("video2");
    y.style.opacity=1;
    
//    var z = document.getElementById("body1");
//    z.style.position="relative";
}
    
    
function playpause() {
    var video = document.getElementById("video2");
    var btn = document.getElementById("myBtn");

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
    
     var img = document.getElementById('infoToggler').src;
        if (img.indexOf('asserts/images/play_pause-512%20(1).png')!=-1) {
            document.getElementById('infoToggler').src  = 'asserts/images/play_pause-512.png';
        }
         else {
           document.getElementById('infoToggler').src = 'asserts/images/play_pause-512%20(1).png';
       }
}
    
    function change(){
        var t = document.getElementById("dropdown");
//        var w = document.getElementsById("right");
        
        
        
        if(t.style.display=="block"){
            t.style.display="none";
            
            w.style.transform = "rotate(90deg)";
        }
        else{
            t.style.display="block";
            
            w.style.transform = "rotate(0deg)";
            }
        
        
            
        }

function change1(){
    var u = document.getElementById("dropdown1");
    if(u.style.display=="block"){
            u.style.display="none";
        }
        else{
            u.style.display="block";
        }
}

function change2(){
    var u = document.getElementById("dropdown2");
    if(u.style.display=="block"){
            u.style.display="none";
        }
        else{
            u.style.display="block";
        }
}

function change3(){
    var u = document.getElementById("dropdown3");
    if(u.style.display=="block"){
            u.style.display="none";
        }
        else{
            u.style.display="block";
        }
}