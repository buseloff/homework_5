"use strict";
/*Задание 6. Вычислить стоимость заказа пиццы. Известно, что данный вид пиццы за 100 грамм стоит M грн. 
Скидка 3% предоставляется если сумма заказа превышает 500 грн или вес заказ больше 1 кг.
*/

let orderPrice, price, discount, weight;
price = 50.0;
discount = 3;
weight = parseFloat(prompt("Введите вес пицы в граммах", 100.0));
orderPrice = (weight / 100) * price;

if (orderPrice >= 500 || weight >= 1000) {
  discount = (discount / 100) * orderPrice;
  alert(`Ваша скидка = ${discount.toFixed(2)} грн., к оплате ${(orderPrice - discount).toFixed(2)} грн.`);
} else {
  alert(`Скидки нет, к оплате ${orderPrice.toFixed(2)} грн`);
}
