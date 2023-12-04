//* Код для Навигации
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(document).on('click', '.header__list > li > a', (e) => {
    /* Вот этот отрезок не обязателен! */
    e.preventDefault();
    let url = $(e.target).attr('href');
    location.href = url;

    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

//?======================================================================

//* Код для Слайдера в promo
$(document).ready(function () {
  $('.slider-promo').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
  });
});

//?======================================================================

//* Код для Слайдера в features
$(document).ready(function () {
  $('.features__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 2000,
          arrows: true,
          prevArrow:
            '<button type="button" class="slider-promo-prev"><img src="img/prev_arrow.png"></button>',
          nextArrow:
            '<button type="button" class="slider-promo-next"><img src="img/next_arrow.png"></button>',
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          arrows: true,
          prevArrow:
            '<button type="button" class="slider-promo-prev"><img src="img/prev_arrow.png"></button>',
          nextArrow:
            '<button type="button" class="slider-promo-next"><img src="img/next_arrow.png"></button>',
        },
      },
    ],
  });
});

//?======================================================================

//* Код для Слайдера в services
$(document).ready(function () {
  $('.services__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="services__slider-prev"><img src="img/prev_arrow.png"></button>',
    nextArrow:
      '<button type="button" class="services__slider-next"><img src="img/next_arrow.png"></button>',
  });
});

//?======================================================================
//* Добавление Партнеров

window.addEventListener('DOMContentLoaded', () => {
  class FeatureItem {
    constructor(link, src, title, parentSelector) {
      this.link = link;
      this.src = src;
      this.title = title;
      this.parent = document.querySelector(parentSelector);
    }

    createHTML() {
      const newElement = document.createElement('a');
      newElement.innerHTML = `
				<a href=${this.link} target="_blank" class="partners__item item-partners">
					<div class="item-partners__image">
						<picture>
							<img src=${this.src} alt="partner_image">
						</picture>
					</div>
					<h3 class="item-partners__title">${this.title}</h3>
				</a>
			`;
      this.parent.append(newElement);
    }
  }

  new FeatureItem(
    'https://ned-perm.ru/',
    './img/partners/ned.png',
    'ООО "НЕД-Пермь"',
    '.partners__wrapper'
  ).createHTML();

  new FeatureItem(
    'http://famildom.ru/',
    './img/partners/fd.png',
    'ООО "Фамильный Дом"',
    '.partners__wrapper'
  ).createHTML();

  new FeatureItem(
    'http://etp-perm.ru/',
    './img/partners/electro.png',
    'ООО "Электротехпром"',
    '.partners__wrapper'
  ).createHTML();

  new FeatureItem(
    'https://elca-kable.ru/',
    './img/partners/elca.png',
    'ООО "ОКП "ЭЛКА-Кабель"',
    '.partners__wrapper'
  ).createHTML();

  new FeatureItem(
    'http://www.rusperforator.ru/',
    './img/partners/rusper.png',
    'АО "Русперфоратор"',
    '.partners__wrapper'
  ).createHTML();

  new FeatureItem(
    'http://mskenergo.ru/',
    './img/partners/msk.png',
    'АО "МСК Энерго"',
    '.partners__wrapper'
  ).createHTML();
});
