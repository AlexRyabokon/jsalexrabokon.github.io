/*function sum(a, b) {
    return a + b;
}

console.log(sum(2, 2));

function sum(a, b) {
    let text = 'Итого: ';

    return(text += a + b);
}

console.log(sum(2, 2));*/

/* Реализовать функцию для подсчета n-го обобщенного числа Фибоначчи.

Написать функцию для подсчета n-го обобщенного
числа Фибоначчи. Аргументами на вход будут три 
числа - F0, F1, n, где F0, F1 - первые два числа 
последовательности (могут быть любыми целыми числами), 
n - порядковый номер числа Фибоначчи, которое надо найти. 
Последовательнось будет строиться по следующему 
правилу F2 = F0 + F1, F3 = F1 + F2 и так далее.

Считать с помощью модального окна браузера число, 
которое введет пользователь (n).

С помощью функции посчитать n-е число в обобщенной 
последовательности Фибоначчи и вывести его на экран.

Пользователь может ввести отрицательное 
число - результат надо посчитать по такому 
же правилу (F-1 = F-3 + F-2).*/

let startNum = +prompt('Введите число для подсчета n-го обобщенного числа Фибоначчи', '');

if (isNaN(startNum) || startNum == '' ) {
    document.write('Пожалуйста, введите число (Например 1, 2 или 53)');
} else {document.write(fib(startNum))};



function fib(n) {
    let a = 1;
    let b = 1;
        for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  