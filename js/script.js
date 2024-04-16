$(document).ready(function () {
  $(".menu-mobile").click(function (event) {
    //При клике добавляем класс active
    $(".menu-mobile, .header-menu").toggleClass("active");
    $("body").toggleClass("lock"); //Блокирует передвижение контента при открытом мению в режие мобильного устройства
  });
});
