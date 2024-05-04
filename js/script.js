$(document).ready(function () {
  $(".menu-mobile").click(function (event) {
    //При клике добавляем класс active
    $(".menu-mobile, .header-menu").toggleClass("active");
    $("body").toggleClass("lock"); //Блокирует передвижение контента при открытом мению в режие мобильного устройства
  });
});
// Сполллер сервис
document.querySelector(".button-service").onclick = (event) => {
  const spollerClass = document.querySelector(".service-list");
  spollerClass.classList.toggle("service-list-open");
  const image = document.querySelector(".button-service").querySelector("img");
  if (image.src.includes("cross.svg")) {
    image.src = "./img/spoler/union.svg";
    image.alt = "union";
  } else {
    image.src = "./img/spoler/cross.svg";
    image.alt = "cross";
  }
};
