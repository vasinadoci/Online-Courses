//==============================menu-burger=========================================
//==================================================================================
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
})

//============================scroll==============================================
//================================================================================
$('a[href^="#"]').on('click', function () {

   let href = $(this).attr('href');

   $('html, body').animate({
      scrollTop: $(href).offset().top
   });
   return false;
});

//====================================tabs====================================
//============================================================================
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {

   item.addEventListener('click', function () {
      contentBoxes.forEach(function (item) {
         item.classList.add('tab-content__hidden');
      });

      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('tab-content__hidden');
   });
});
//Кнопки ОТКРЫТЬ модалки
//находим ВСЕ кнопки при помощи .querySelectorAll
const modalBtns = document.querySelectorAll('[data-modal-button]');
console.log(modalBtns);
//прослушивем событие (клик)на каждой из кнопок Отрытия модалки
modalBtns.forEach(function (item) {
   //слушаем клик по каждой кнопке -item
   item.addEventListener('click', function () {
      /* Теперь необходимо по какой именно кнопке был произведен клик, считать значение этой кнопки, которое записано в атрибут data-modal-more-button т.е считать modal-more-1 или modal-more-2. 
      /* Полученное значение присваиваем в переменную */
      const modalId = this.dataset.modalButton;
      /* Затем нужно найти на странице модалку с таким id */
      const modalWindow = document.querySelector('#' + modalId);
      //Теперь нужую модалку по которой кликунли нужно показать
      modalWindow.classList.remove('fade-block-more');

      modalWindow.querySelector('.modal__window').addEventListener('click', function (event) {
         event.stopPropagation();
         /* Все. Модалка не закрывается по клику внутри себя, но толко по фэйду или кнопке "Закрыть окно" */
      });

   });
});

//Кнопки ЗАКРЫТЬ модалки
//Закрытие модалки по кнопке "Закрыть окно" и по fade-block-more

//1. По кнопке "Закрыть окно"

//находим все кнопки, которые закрывают модалки
const modalCloseBtns = document.querySelectorAll('[data-modal-close-btn]');
/* Нужно обойти коллекцию из кнопок и повесить на них клик и закрывать модалку*/
modalCloseBtns.forEach(function (item) {
   item.addEventListener('click', function () {
      //находим ближайшего родителя у которого есть атрибут data-modal-more
      const modalWindow = this.closest('[data-modal-more]');
      //и добавляем ему класс fade-block-more тем самым возвращая display:none
      modalWindow.classList.add('fade-block-more');
   });
});

//2. Закрытие модалки по fade-block-more

//Находим все модалки по селектору data-modal-more
const allModalWindows = document.querySelectorAll('[data-modal-more]');
/* обходим коллекцию модальных окон, каждой вешаем событие клик */
allModalWindows.forEach(function (item) {
   item.addEventListener('click', function () {
      /* и когда происходит клик нужно скрыть ТЕКУЩУЮ модалку(через this) */
      this.classList.add('fade-block-more');
   });
});
;

$(function () {
   $('.toolbar-blog__toggles button').click(function () {
      let get_id = this.id;
      let get_current = $('.blog-page__posts .' + get_id);

      $('.post__card').not(get_current).hide(500);
      get_current.show(300);
   });

   $('#showall').click(function () {
      $('.post__card').show(300);
   });
});;
//=============================accorderon===============================================
//=====================================================================================

const headersBlock = document.querySelectorAll("[data-name='accordeon-list__title']");

headersBlock.forEach(function (i) {
   i.addEventListener('click', function () {

      this.nextElementSibling.classList.toggle('accordeon-body')

   })
});
;
//============================toggles from courses-page=============================
$(function () {
   $('.courses-page__toggles button').click(function () {
      let get_id = this.id;
      let get_current = $('.courses-page__cards .' + get_id);

      $('.card--vertical').not(get_current).hide(500);
      get_current.show(500);
   });

   $('#showall').click(function () {
      $('.card--vertical').show(400);
   });
});;

//=============================slider team================================
//=========================================================================

const sliderCards = document.querySelectorAll('.sliders__card');
const sliderTrack = document.querySelector('.slider__track');
const windowSize = document.body.clientWidth;
let width;
let count = 0;

function initial() {
   console.log("resize");
   width = document.querySelector('.slider').offsetWidth;
   sliderTrack.style.width = width * sliderCards.length + "px";

   sliderCards.forEach(item => {
      //item.style.width = width + "px";
      //item.style.width = width / 3 + "px"; //кол-во  видимых слайдов 
      item.style.width = width / 4 + "px"; //кол-во  видимых слайдов 

      item.style.height = "auto";
      rollSlider();
   });
}
window.addEventListener("resize", initial)
initial();

document.querySelector(".button__slider-prev").addEventListener("click", function () {
   count--;
   if (count < 0) {
      count = sliderCards.length - 1;
   }
   rollSlider();
});
document.querySelector(".button__slider-next").addEventListener("click", function () {
   count++;
   if (count >= sliderCards.length) {
      count = 0;
   }
   rollSlider();
});


function rollSlider() {
   //sliderTrack.style.transform = 'translate(-' + count * width + 'px)';
   /* если виден один слайд прокручивает по одному
   если видны два слайда прокруивает по два 
   если видны три слайда прокруивает по три */

   //=====================2 слайда==================
   sliderTrack.style.transform = 'translate(-' + count * width / 2 + 'px)';
   /* прокручивает один слайд при наличии двух видимых слайдов*/

   //sliderTrack.style.transform = 'translate(-' + count * width / 1.5 + 'px)';
   /* прокручивает полтора слайда при наличии двух видимых слайдов*/

   //==================3 слайда =====================
   //sliderTrack.style.transform = 'translate(-' + count * width / 1.5 + 'px)';
   /* прокручивает два слайда при наличии трех видимых слайдов*/

   //sliderTrack.style.transform = 'translate(-' + count * width / 3 + 'px)';
   /* прокручивает слайды по одному при наличии трех видимых слайдов */
};
//========================sliders-t(sliders-testimonials)======================
//=============================================================================
const sliderCardsT = document.querySelectorAll('.sliders__card--t');
const sliderTrackT = document.querySelector('.slider__track--t');
const windowSizeT = document.body.clientWidth;
let widthT;
let countT = 0;

function initialT() {
   console.log("resize");
   widthT = document.querySelector('.slider--t').offsetWidth;
   sliderTrackT.style.width = widthT * sliderCardsT.length + "px";

   sliderCardsT.forEach(item => {
      item.style.width = widthT + "px";
      //item.style.width = widthT / 3 + "px"; //кол-во  видимых слайдов 
      //item.style.width = widthT / 4 + "px"; //кол-во  видимых слайдов 

      item.style.height = "auto";
      rollSliderT();
   });
};
window.addEventListener("resize", initial)
initialT();

document.querySelector(".button__slider-prev--t").addEventListener("click", function () {
   countT--;
   if (countT < 0) {
      countT = sliderCardsT.length - 1;
   }
   rollSliderT();
});
document.querySelector(".button__slider-next--t").addEventListener("click", function () {

   countT++;
   if (countT >= sliderCardsT.length) {
      countT = 0;
   }
   rollSliderT();
});


function rollSliderT() {
   sliderTrackT.style.transform = 'translate(-' + countT * widthT + 'px)';
   /* если виден один слайд прокручивает по одному
   если видны два слайда прокруивает по два 
   если видны три слайда прокруивает по три */

   //===================2 слайда=================
   //sliderTrackT.style.transform = 'translate(-' + countT * widthT / 2 + 'px)';
   /* прокручивает один слайд при наличии двух видимых слайдов*/

   //sliderTrackT.style.transform = 'translate(-' + countT * widthT / 1.5 + 'px)';
   /* прокручивает полтора слайда при наличии двух видимых слайдов*/

   //===============3 слайда ==================
   //sliderTrackT.style.transform = 'translate(-' + countT * widthT / 1.5 + 'px)';
   /* прокручивает два слайда при наличии трех видимых слайдов*/

   //sliderTrackT.style.transform = 'translate(-' + countT * widthT / 3 + 'px)';
   /* прокручивает слайды по одному при наличии трех видимых слайдов */
};
//========================================Timer==========================================
//=======================================================================================

//получение часов мин и сек с компа пользователя

//получаем данные о времени с компа пользвователя
const date = new Date();

//переносим  в переменные при помощи метода get часы мин и сек
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

//предаем эти данные в классы блоков 
const hoursBlock = document.querySelector(".timer-cta__hours");
const minutesBlock = document.querySelector(".timer-cta__minutes");
const secondsBlock = document.querySelector(".timer-cta__seconds");

//дальше записываем информацию из переменных hours, minutes, seconds  в данные блоки при помощи св-ва textContent
hoursBlock.textContent = hours;
minutesBlock.textContent = minutes;
secondsBlock.textContent = seconds;

//автообновление времени на компе пользователя
const updateTimer1 = () => {

   const date = new Date();

   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();

   //добавление 0 в часы мин и сек(форматирование)
   const fHours = hours < 10 ? "0" + hours : hours;
   const fMinutes = hours < 10 ? "0" + minutes : minutes;
   const fSeconds = hours < 10 ? "0" + seconds : seconds;

   hoursBlock.textContent = fHours;
   minutesBlock.textContent = fMinutes;
   secondsBlock.textContent = fSeconds;

}
updateTimer1();
setInterval(updateTimer1, 500)



//Deadline или обратный отсчет
/* const daysBlock = document.querySelector(".timer-cta__days");
const hoursBlock = document.querySelector(".timer-cta__hours");
const minutesBlock = document.querySelector(".timer-cta__minutes");
const secondsBlock = document.querySelector(".timer-cta__seconds");

let interval;

// изменение окончаний в днях мин и сек
const numWordSec = (value, words) => {

   value = Math.abs(value) % 100;
   const lastNum = value % 10;

   if (value > 10 && value < 20) return words[2];
   if (lastNum > 1 && lastNum < 5) return words[1];
   if (lastNum === 1) return words[0];

   return words[2];
}

const numWordMin = (value, words) => {
   value = Math.abs(value) % 100;
   const lastNum = value % 10;

   if (value > 10 & value < 20) return words[2];
   if (lastNum > 1 && lastNum < 5) return words[1];
   if (lastNum === 1) return words[0];
   return words[2];
}

const numWordHours = (value, words) => {
   value = Math.abs(value) % 100;
   const lastNum = value % 10;

   if (value > 10 & value < 20) return words[2];
   if (lastNum > 1 && lastNum < 5) return words[1];
   if (lastNum === 1) return words[0];
   return words[2];
}

const numWordDays = (value, words) => {
   value = Math.abs(value) % 100;
   const lastNum = value % 10;

   if (value > 10 & value < 20) return words[2];
   if (lastNum > 1 && lastNum < 5) return words[1];
   if (lastNum === 1) return words[0];
   return words[2];
}

const updateTimer2 = () => {

   const date = new Date();
   const dateDeadline = new Date("29 august 2022").getTime();
   const timeRemaning = (dateDeadline - date) / 1000;

   const days = Math.floor(timeRemaning / 60 / 60 / 24)
   const hours = Math.floor((timeRemaning / 60 / 60) % 24);
   const minutes = Math.floor((timeRemaning / 60) % 60);
   const seconds = Math.floor(timeRemaning % 60);

   //добавление 0 в часы мин и сек(форматирование)

   const fDays = days < 10 ? "0" + days : days;
   const fHours = hours < 10 ? "0" + hours : hours;
   const fMinutes = hours < 10 ? "0" + minutes : minutes;
   const fSeconds = hours < 10 ? "0" + seconds : seconds;

   daysBlock.textContent = fDays;
   hoursBlock.textContent = fHours;
   minutesBlock.textContent = fMinutes;
   secondsBlock.textContent = fSeconds;

   //изменение окончаний
   secondsBlock.nextElementSibling.textContent = numWordSec(seconds, ["секунда", "секунды", "секунд"]);
   minutesBlock.nextElementSibling.textContent = numWordMin(minutes, ["минута", "минуты", "минут"])
   hoursBlock.nextElementSibling.textContent = numWordHours(hours, ["час", "часа", "часов"])
   daysBlock.nextElementSibling.textContent = numWordDays(days, ["день", "дня", "дней"])

   if (timeRemaning <= 0) {
      clearInterval(interval);
      daysBlock.textContent = "00";
      hoursBlock.textContent = "00";
      minutesBlock.textContent = "00";
      secondsBlock.textContent = "00";
   }
}
updateTimer2();
interval = setInterval(updateTimer2, 500) */;
const sliderCardsR = document.querySelectorAll('.card-courses--r');
const sliderTrackR = document.querySelector('.slider__track--r');
const windowSizeR = document.body.clientWidth;
let widthR;
let countR = 0;

function initialR() {
   console.log("resize");
   widthR = document.querySelector('.slider--r').offsetWidth;
   sliderTrackR.style.width = widthR * sliderCardsR.length + "px";

   sliderCardsR.forEach(item => {
      //item.style.width = widthR + "px";
      item.style.width = widthR / 2 + "px"; //кол-во  видимых слайдов 
      //item.style.width = widthR / 3 + "px"; //кол-во  видимых слайдов 
      //item.style.width = widthR / 4 + "px"; //кол-во  видимых слайдов 

      item.style.height = "auto";
      rollSliderR();
   });
};
window.addEventListener("resize", initial)
initialR();

document.querySelector(".button__slider-prev--r").addEventListener("click", function () {
   countR--;
   if (countR < 0) {
      countR = sliderCardsR.length - 1;
   }
   rollSliderR();
});
document.querySelector(".button__slider-next--r").addEventListener("click", function () {

   countR++;
   if (countR >= sliderCardsR.length) {
      countR = 0;
   }
   rollSliderR();
});


function rollSliderR() {
   //sliderTrackR.style.transform = 'translate(-' + countR * widthR + 'px)';
   /* если виден один слайд прокручивает по одному
   если видны два слайда прокруивает по два 
   если видны три слайда прокруивает по три */

   //===================2 слайда=================
   sliderTrackR.style.transform = 'translate(-' + countR * widthR / 2 + 'px)';
   /* прокручивает один слайд при наличии двух видимых слайдов*/

   //sliderTrackR.style.transform = 'translate(-' + countR * widthR / 1.5 + 'px)';
   /* прокручивает полтора слайда при наличии двух видимых слайдов*/

   //===============3 слайда ==================
   //sliderTrackR.style.transform = 'translate(-' + countR * widthR / 1.5 + 'px)';
   /* прокручивает два слайда при наличии трех видимых слайдов*/

   //sliderTrackR.style.transform = 'translate(-' + countR * widthR / 3 + 'px)';
   /* прокручивает слайды по одному при наличии трех видимых слайдов */
};










