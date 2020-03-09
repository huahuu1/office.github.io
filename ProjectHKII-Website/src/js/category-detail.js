$(document).ready(function() {
    $('.button-collapse').click(function() {
        $(this).toggleClass('fas fa-chevron-down');
        $(this).toggleClass('fas fa-chevron-up');

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

$(document).ready(function () {
    $('.button-collapse').click(function () {
        $('.item-content').toggleClass('uncollapse');
        if($('.item-content').hasClass('uncollapse')) {
            $('.item-content').removeClass("hide");
        } else {
            $(this).parent().next().toggleClass("d-none");
        }
    });
});

// $(document).ready(function () {
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