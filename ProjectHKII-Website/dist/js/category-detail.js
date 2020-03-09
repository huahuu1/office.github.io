"use strict";

$(document).ready(function () {
  $('.button-collapse').click(function () {
<<<<<<< HEAD
    $(this).toggleClass('fas fa-chevron-down');
    $(this).toggleClass('fas fa-chevron-up');
=======
    $('.item-content').toggleClass('uncollapse');
>>>>>>> 097d031a31a7e752f3bc6f0ed1f85f4989fb7d0f

    if ($(this).parent().next().hasClass("d-none")) {
      $(this).parent().next().removeClass("d-none");
    } else {
      $(this).parent().next().toggleClass("d-none");
    }
  });
}); // $(document).ready(function () {
//     $('.button-collapse').click(function () {
//       $(this).toggleClass('fas fa-chevron-down');
//       $(this).toggleClass('fas fa-chevron-up');
//       if ($(this).parent().next().next().hasClass("sub-menu")) {
//         $(this).parent().next().next().removeClass("sub-menu");
//       } else {
//         $(this).parent().next().next().toggleClass("sub-menu");
//       }
//     });
//   });