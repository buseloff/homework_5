"use strict";
/*Задание 10. Спросить у пользователя общеизвестный факт на ваш вкус и
 высветить ему сообщение правильно или нет. например, “как называется наша планета?”.*/


 let answer;

answer = prompt("Как называется наша планета?");

if (answer === "Земля") {
    alert(`Поздравляем!!! Ответ правильный.`);
} else {
    alert(`К сожалению, ответ неправильный.`);
}

