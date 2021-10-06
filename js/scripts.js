// (function (doc)
// {
//   var display = doc.getElementById('navigation');
  
//  // console.log(display);
//   display.addEventListener('click', function(ev)
//   {
//     var thatUl = ev.target.querySelector('#ul');
//       //console.log(thatUl.classList);
//     thatUl.classList.toggle('show');
//   }, false);
// }(document))


// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');

//   burger.addEventListener('click',()=>{
// nav.classList.toggle('nav-active');
//   });

// //Animate Links
// navLinks.forEach((link, index) => {
//   link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1}s';
  
// });

// }

// navSlide ();

$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});

$('navlinks').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
