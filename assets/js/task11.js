"use strict";
/*Задание 11. Попросить пользователя решить пример “1+1=?” (или любой другой пример на ваш вкус). 
Высвечивать (повторять) пример до тех пор пока пользователь не решит его.*/

let userAnswer = parseInt(prompt("1 + 1 = ?"));
let compAnswer = 2;
while (userAnswer != compAnswer) {
  alert("Неправильно!!!");
  userAnswer = parseInt(prompt("Еще раз 1 + 1 = ?"));
}

alert("Поздравляем!!! Вы правы.");
