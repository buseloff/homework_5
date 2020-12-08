"use strict";
/*Задание 12. Проверить является ли введенное число простым.*/
let userAnswer, i, flag;
userAnswer = parseInt(prompt("Введите целое число не меньше 2"));

while (userAnswer < 2) {
  alert("Неправильный ввод!!!");
  userAnswer = parseInt(prompt("Введите целое число не меньше 2"));
}

flag = 0;
for (i = 2; i < userAnswer; i++) {
  if (userAnswer % i == 0) {
    flag++;
  }
  if (flag > 0) {
    alert(`Число ${userAnswer} не простое`);
    break;
  }
}
if (flag == 0) {
  alert(`Число ${userAnswer}  простое`);
}
