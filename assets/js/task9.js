"use strict";
/*Задание 9. Вывести таблицу значений для функции y = -3x2 + 5x - 2 для значения х от -2 до 2 с шагом 0.5.*/
let y, xStart, xEnd, i, step;
xStart = -2;
xEnd = 2;
step = 0.5;

console.log(`Таблица значений для функции:`);
for (i = xStart; i <= xEnd; i += 0.5) {
  y = -3 * i ** 2 + 5 * i - 2;
  console.log(`x = ${i}, y = ${y}`);
}
