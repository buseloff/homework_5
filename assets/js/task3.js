"use strict";
/*    Задание 3. Напишите программу перевода метров в сантиметры и дюймы.
 */
let m, cm, inches;
m = parseFloat(prompt("Введите количество метров", 10.0));
cm = m * 100;
inches = Math.round(cm / 2.54);
alert(`${m} метров это ${cm} см или ${inches} дюймов`);
