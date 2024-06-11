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
let jumpCost = 1000;
let jumpCostclick = 10; // Начальное количество прыжков, которое тратится


// Функция, которая увеличивает счетчик прыжков
function incrementJumpCount() {
  jumpCount += jumpHeight;
  jumpCountElement.textContent = jumpCount;
}
buttonJumps.addEventListener('click', ()=>{
  jumpCount += clicktap;
  jumpCountElement.textContent = jumpCount;
})
buttonbuyclick.addEventListener('click', ()=>{
  if (jumpCount >= jumpCostclick) {
    jumpCount -= jumpCostclick;
    jumpCostClickElement.textContent = jumpCostclick;
    clicktap += 1; // Увеличиваем высоту прыжка
    jumpCostclick += 15; // Увеличиваем стоимость прыжка
    jumpCostClickElement.textContent = jumpCostclick; // Обновляем текст стоимости 
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
    jumpCost += 500; // Увеличиваем стоимость прыжка
    jumpCostElement.textContent = jumpCost; // Обновляем текст стоимости
    cube.style.animation = `highJump ${jumpHeight}px 1s infinite alternate`; 
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