// $(document).ready(function() {
//     $(window).on('mousewheel', function(event) {
//         event.preventDefault();
//         let delta = event.originalEvent.deltaY;
//         let currentPosition = $(window).scrollTop();
//         let sections = $("section");
//         sections.each(function(index, section) {
//             let sectionTop = $(section).offset().top;
//             if (delta > 0 && sectionTop > currentPosition) {
//                 $('html, body').stop().animate({
//                     scrollTop: sectionTop
//                 }, 500);
//                 return false;
//             }
//         });
//     });
// });

// scroll to top
const scrollToTop = document.getElementById('scroll-to-top');

scrollToTop.addEventListener('click',() => {
    window.scrollTo({
         top:0,
         behavior:'smooth'
    })
});

// pre loader
window.addEventListener('load', () => { 
    setInterval(() => {
      document.getElementById('pre-loader').style.display = 'none'
    }, 3000)
  })