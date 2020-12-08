"use strict";
/* Вывести полную таблицу умножения для всех чисел от 1 до 9.*/

let num, i;

console.log("Таблица умножения");
for (num = 1; num <= 9; num++) {
  console.log(`Таблица умножения на ${num}`);

  for (i = 0; i <= 9; i++) {
    console.log(`${i} * ${num} = ${num * i}`);
  }
}
