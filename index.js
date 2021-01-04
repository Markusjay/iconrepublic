//Navigation Bar


const selectElement = function (element) {
  return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle')
let body = selectElement('body')
let logomove = selectElement('.logomove')


menuToggler.addEventListener('click', function () {
  
  body.classList.toggle('open');
  body.classList.toggle('disableScroll');
  logomove.classList.toggle('visible');

});












