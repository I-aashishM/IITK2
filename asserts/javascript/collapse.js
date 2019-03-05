var bodyStyles = window.getComputedStyle(document.body); 
var divsize = bodyStyles.getPropertyValue('--s');
var expanded = false;

function expand() {
  var menu = document.getElementById('menu0');
  if (expanded === true) {
    menu.style.width = parseInt(divsize, 10) * 0 + "px";
    expanded = false;
  } 
  else if(expanded === false){
    menu.style.width = parseInt(divsize, 10) * menu.childElementCount-250 + "px";
    expanded = true;
  }
}
