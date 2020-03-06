"use strict";

// $(document).ready(function () {
// var coll = document.getElementsByClassName("button-collapse");
// var i;
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
// });
// $(document).ready(function () {
//     $('.button-collapse').click(function () {
//         $('.item-content').toggleClass("uncollapse");
//         if($('.item-content').hasClass('uncollapse')) {
//             $('.item-content').removeClass("hide");
//         } else {
//             $('.item-content').addClass("hide");
//         }
//         $('.menu-arrow').toggleClass('fas fa-chevron-down');
//         $('.menu-arrow').toggleClass('fas fa-chevron-up');
//     });
// });
$(document).ready(function () {
  $('.button-collapse').click(function () {
    $(this).toggleClass('fas fa-chevron-down');
    $(this).toggleClass('fas fa-chevron-up');

    if ($(this).parent().next().hasClass("d-none")) {
      $(this).parent().next().removeClass("d-none");
    } else {
      $(this).parent().next().toggleClass("d-none");
    }
  });
});