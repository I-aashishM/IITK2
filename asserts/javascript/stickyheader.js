// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 585 || document.documentElement.scrollTop > 585) {
        document.getElementById("navbar").style.top = "0";
        $('image-container').addClass('show');
        
    } else {
        document.getElementById("navbar").style.top = "-150px";
        $('image-container').removeClass('show');
    }
}