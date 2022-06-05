$(document).ready(function () {
  $(".menu-fold").click(function (event) {
    event.preventDefault();
    $("body").toggleClass("menu-show");
  });
});
