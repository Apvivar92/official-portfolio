// Create a single button to open and close side nav
/* Create event to activate sidebar when clicked */
document.getElementById('myBtn').addEventListener('click', open_close);

var hamburgerMenu = document.getElementById('hamburger');
/*Detemines status of the side nav bar*/
var menuState = 0; //closed
/* create the open and close function*/
function open_close() {
  if (menuState === 0) {
    menuState = 1;
    /*make sidebbar move right 250px */
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';

    hamburgerMenu.classList.add('hamburgerActive');
  } else {
    menuState = 0; /*close sidebar*/
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';

    hamburgerMenu.classList.remove('hamburgerActive');
  }
}

// function myFunction() {
//   var element = document.getElementById('myBtn');
//   element.classList.add('hamburger');
// }
