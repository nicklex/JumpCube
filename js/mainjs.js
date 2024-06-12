const jumpCountElement = document.getElementById("jumpCount");
let jumpCount = 0;
const cube = document.querySelector('.cube');
const button = document.querySelector('.button');
const buttonJumps = document.querySelector('.buttonjump');
const buttonbuyclick = document.querySelector('.buttonbuy');
const jumpCostElement = document.getElementById("jumpCost"); // Добавили элемент для стоимости
const jumpCostClickElement = document.getElementById("jumpCostclicktext");
let jumpHeight = 0; // Начальная высота прыжка
let clicktap = 1;
let jumpCost = 10;
let jumpCostclick = 10; // Начальное количество прыжков, которое тратится


// Функция, которая увеличивает счетчик прыжков
function incrementJumpCount() {
  jumpCount += jumpHeight;
  jumpCountElement.textContent = jumpCount;
  saveProgress();
}
buttonJumps.addEventListener('click', ()=>{
  jumpCount += clicktap;
  jumpCountElement.textContent = jumpCount;
  saveProgress();
})
buttonbuyclick.addEventListener('click', ()=>{
  if (jumpCount >= jumpCostclick) {
    jumpCount -= jumpCostclick;
    jumpCostClickElement.textContent = jumpCostclick;
    clicktap += 1; // Увеличиваем высоту прыжка
    jumpCostclick += 15; // Увеличиваем стоимость прыжка
    jumpCostClickElement.textContent = jumpCostclick;
    saveProgress(); // Обновляем текст стоимости 
  } else {
    alert('Недостаточно прыжков!');
  }
})
// Функция для высоко прыжка
function highJump() {
  if (jumpCount >= jumpCost) {
    jumpCount -= jumpCost;
    jumpCountElement.textContent = jumpCount;
    jumpHeight += 1; // Увеличиваем высоту прыжка
    jumpCost += 10; // Увеличиваем стоимость прыжка
    jumpCostElement.textContent = jumpCost; // Обновляем текст стоимости
    cube.style.animation = `highJump ${jumpHeight}px 1s infinite alternate`; 
    saveProgress();
  } else {
    alert('Недостаточно прыжков!');
  }
}


// Добавляем анимацию jump в JavaScript
cube.style.animation = 'jump 1s infinite alternate';
// Возвращаем обработчик события для подсчета прыжков
cube.addEventListener('animationiteration', incrementJumpCount); 

// Вместо того, чтобы добавлять анимацию jump к highJump, просто заменяем анимацию
button.addEventListener('click', highJump);

loadProgress(); 
    // Загрузка данных из Local Storage
    function loadProgress() {
      const storedJumpCount = localStorage.getItem("jumpCount");
      const storedJumpCost = localStorage.getItem("jumpCost");
      const multicount = localStorage.getItem("jumpCostclick");
      const mclicktap = localStorage.getItem("clicktap");
      const storedjumpHeight = localStorage.getItem("jumpHeight");

      if (storedJumpCount !== null) {
        jumpCount = parseInt(storedJumpCount);
        jumpCountElement.textContent = jumpCount;
      }
      if (storedJumpCost !== null) {
        jumpCost = parseInt(storedJumpCost);
        jumpCostElement.textContent = jumpCost;
      }
      if (multicount !== null) {
        jumpCostclick = parseInt(multicount);
        jumpCostClickElement.textContent = jumpCostclick;
      }
      if (mclicktap !== null) {
        clicktap = parseInt(mclicktap);
      }
      if (storedjumpHeight !== null) {
        jumpHeight = parseInt(storedjumpHeight);
      }
    }

    // Сохранение данных в Local Storage
    function saveProgress() {
      localStorage.setItem("jumpCount", jumpCount);
      localStorage.setItem("jumpCost", jumpCost);
      localStorage.setItem("jumpCostclick", jumpCostclick);
      localStorage.setItem("clicktap", clicktap);
      localStorage.setItem("jumpHeight", jumpHeight);
    }
    function clearProgress() {
      localStorage.clear();
      jumpCount = 0; // Сбросить счетчик прыжков
      jumpCost = 2; // Сбросить стоимость прыжка
      clicktap = 1;
      jumpCostclick = 10;
      jumpHeight = 0;
      jumpCountElement.textContent = jumpCount; // Обновить текст счетчика
      jumpCostElement.textContent = jumpCost;// Обновить текст стоимости
      jumpCostClickElement.textContent = jumpCostclick; 
      cube.style.animation = 'jump 1s infinite alternate'; // Сбросить анимацию
      alert("Сохранения удалены!");
    }
