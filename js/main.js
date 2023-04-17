$(function () {
  $('.menu a, .header__link, .logo').on('click', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - $('.menu').height();

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.burger, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('lock');
  });
});

window.onscroll = function () {
  myFunction();
};
let header = document.querySelector('.header__top');

let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

var mixer = mixitup('.works__content');
