// отримуємо посилання на блок, який будемо змінювати
const resizable = document.getElementById("resizable");
let startX, startY, startWidth, startHeight;
// встановлюємо початкові значення ширини та висоти блоку
let currentWidth = resizable.offsetWidth;
let currentHeight = resizable.offsetHeight;

// функція, яка буде викликатися під час перетягування мишкою
resizable.onmousedown = function resize (e /*callback event*/) {
  // визначаємо нову ширину та висоту блоку
      startWidth = resizable.offsetWidth;
      startHeight = resizable.offsetHeight;
      startX = e.clientX;
      startY = e.clientY;
      document.onmousemove = function (e) {
        // встановлюємо нові значення зі стилями ширини та висоти блоку
        resizable.style.width = startWidth + e.clientX - startX + 'px';
        resizable.style.height = startHeight + e.clientY - startY + 'px';
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

//ANOTHER VARIANT:

// обробник події mousedown
// resizable.addEventListener("mousedown", (e) => {
//   // отримуємо початкові координати мишки
//   startX = e.clientX;
//   startY = e.clientY;
//   // встановлюємо обробник події mousemove
//   document.addEventListener("mousemove", resize);
// });

// // обробник події mouseup
// document.addEventListener("mouseup", () => {
//   // зберігаємо поточні значення ширини та висоти блоку
//   currentWidth = resizable.offsetWidth;
//   currentHeight = resizable.offsetHeight;
//   // видаляємо обробник події mousemove
//   document.removeEventListener("mousemove", resize);
// });