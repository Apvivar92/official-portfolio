// Create a single button to open and close side nav
/* Create event to activate sidebar when clicked */
document.getElementById('myBtn').addEventListener('click', open_close);

/*Detemines status of the side nav bar*/
var menuState = 1; //closed
/* create the open and close function*/
function open_close() {
  if (menuState === 0) {
    menuState = 1;
    /*make sidebbar move right 250px */
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  } else {
    menuState = 0; /*close sidebar*/
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
}
