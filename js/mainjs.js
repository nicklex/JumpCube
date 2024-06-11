const jumpCountElement = document.getElementById("jumpCount");
let jumpCount = 0;
const cube = document.querySelector('.cube');
const button = document.querySelector('.button');
const jumpCostElement = document.getElementById("jumpCost"); // Добавили элемент для стоимости
let jumpHeight = 1; // Начальная высота прыжка
let jumpCost = 10; // Начальное количество прыжков, которое тратится

// Функция, которая увеличивает счетчик прыжков
function incrementJumpCount() {
  jumpCount += jumpHeight;
  jumpCountElement.textContent = jumpCount;
}

// Функция для высоко прыжка
function highJump() {
  if (jumpCount >= jumpCost) {
    jumpCount -= jumpCost;
    jumpCountElement.textContent = jumpCount;
    jumpHeight += 1; // Увеличиваем высоту прыжка
    jumpCost += 5; // Увеличиваем стоимость прыжка
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