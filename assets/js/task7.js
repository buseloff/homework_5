"use strict";
/*Задание 7. Вывести первых 10 значений степени 2.*/

let initial, i;
initial = parseFloat(prompt("Введите начальное числовое значение", 10.0));

console.log(`Первые десять значений степени 2 числа ${initial}:`);
for (i = initial; i <= initial + 9; i++) {
  console.log(`Степень 2 числа ${i} равна ${(i ** 2).toFixed(2)}`);
}
