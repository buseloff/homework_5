"use strict";
/*Задание 13. Напишите программу “угадай число”. для случайного числа используйте Math.random().*/

let compNumber, userNumber;
compNumber = Math.round(Math.random() * 10);
//console.log(compNumber);
userNumber = parseInt(prompt("Введите целое число от 0 до 10"));
while (userNumber < 0 || userNumber > 10) {
  alert("Неправильный ввод!!!");
  userNumber = parseInt(prompt("Введите целое число от 0 до 10"));
}

while (compNumber != userNumber) {
  userNumber = parseInt(
    prompt("Вы не угадали. Введите еще раз целое число от 0 до 10")
  );
}

alert("Поздравляем!!! Вы угадали");
