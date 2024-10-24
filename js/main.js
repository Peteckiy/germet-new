
// Бургер меню

const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.querySelector(".header__nav");
const burgerLine = document.querySelector('.line')

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    burgerLine.classList.toggle('active');
    console.log('pusk')
});

const modal = document.getElementById('modal');
const modalBnt = document.querySelectorAll('.header__top-button');
const modalClose = document.getElementById('modal__close');

modalBnt.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});
modalClose.addEventListener('click', function() {
    modal.classList.remove('active')
    document.body.style.overflow = 'auto';
});

// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach((accordion) => {
//   accordion.addEventListener("click", function () {
//     // Удаляем активные классы с других аккордеонов и стрелок
//     accordions.forEach((otherAccordion) => {
//       if (otherAccordion !== accordion) {
//         otherAccordion.classList.remove("active");
//         const arrow = otherAccordion.querySelector(".accordion__arrow");
//         if (arrow) arrow.classList.remove("active");
//       }
//     });

//     // Переключаем активный класс для текущего аккордеона
//     this.classList.toggle("active");

//     // Работа с панелью
//     const panel = this.nextElementSibling;
//     const openPanels = document.querySelectorAll(".panel");

//     openPanels.forEach((openPanel) => {
//       if (openPanel !== panel) {
//         openPanel.classList.remove("show");
//         openPanel.style.maxHeight = 0 + "px"; // Устанавливаем высоту 0 для закрытой панели
//       }
//     });



//     panel.classList.toggle("show");

//     // Устанавливаем высоту панели
//     if (panel.classList.contains("show")) {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } else {
//       panel.style.maxHeight = 0;
//     }

//     // Работа с классом для стрелки
//     const arrow = this.querySelector(".accordion__arrow");
//     if (arrow) {
//       arrow.classList.toggle("active");
//     }
//   });
// });
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Удаляем активные классы с других аккордеонов и стрелок
    accordions.forEach((otherAccordion) => {
      if (otherAccordion !== accordion) {
        otherAccordion.classList.remove("active");
        const arrow = otherAccordion.querySelector(".accordion__arrow");
        if (arrow) arrow.classList.remove("active");
      }
    });

    // Переключаем активный класс для текущего аккордеона
    this.classList.toggle("active");

    // Работа с панелью
    const panel = this.nextElementSibling;
    const openPanels = document.querySelectorAll(".panel");

    // Закрываем другие панели
    openPanels.forEach((openPanel) => {
      if (openPanel !== panel) {
        openPanel.classList.remove("show");
        openPanel.style.maxHeight = 0 + "px"; // Устанавливаем высоту 0 для закрытой панели
      }
    });

    // Переключаем видимость панели
    panel.classList.toggle("show");

    // Устанавливаем высоту панели
    if (panel.classList.contains("show")) {
      panel.style.maxHeight = panel.scrollHeight + "px";

      // Прокрутка к блоку panel с классом show
      panel.addEventListener("transitionend", () => {
        const panelPosition = panel.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top: panelPosition, behavior: "smooth" });
      }, { once: true }); // Удаляем слушатель после первого вызова
    } else {
      panel.style.maxHeight = 0;
    }

    // Работа с классом для стрелки
    const arrow = this.querySelector(".accordion__arrow");
    if (arrow) {
      arrow.classList.toggle("active");
    }
  });
});



