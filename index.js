

/* Вам нужно оформить программу конвертер валют, используя пройденные темы.

Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение). 
Пользователь вводит сначала название валюты, затем вводит сумму, 
и название валюты в которую хочет gеревести, после чего получает ответ (для общения с пользователем используем prompt  и alert.
Если пользователь ввел что-то неверно, нужно повторить ввод этой информации. 
По окончании конвертации спросить у пользователя хочет ли он 
произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.*/

//-------------------------------------------------//

// переменные валют
let USD = 20,
    UAH = 1,
    EUR = 30,
    MOL = 35,
    BTC = 10000;

// переменные операций совершаемых с валютами

let baseCurr;
let baseCurrNum;


// запрос выбора валюты



let baseCurrAtt = prompt('Выберите валюту обмена: USD, UAH, EUR, MOL, BTC', '');

//условия правильного ввода

    if (baseCurrAtt == '' || baseCurrAtt == null || Number(baseCurrAtt)) {
        alert('Введите, пожалуйста, правильное значение USD, UAH, EUR, MOL, BTC');
}; 


switch (baseCurrAtt) {
    case 'USD':
        baseCurrNum = +prompt('Введите количество валюты', '');
        baseCurr = baseCurrNum * USD;
        break;
    
    case 'EUR':
        baseCurrNum = +prompt('Введите количество валюты', '');
        baseCurr = baseCurrNum * EUR;
        break;
    
    case 'UAH':
        baseCurrNum = +prompt('Введите количество валюты', '');
        baseCurr = baseCurrNum * UAH;
        break;
    
    case 'MOL':
        baseCurrNum = +prompt('Введите количество валюты', '');
        baseCurr = baseCurrNum * MOL;
        break;
    
    case 'BTC':
        baseCurrNum = +prompt('Введите количество валюты', '');
        baseCurr = baseCurrNum * BTC;
        break;
}


do {
    switch (baseCurrAtt) {
        case 'USD':
            baseCurrNum = +prompt('Введите количество валюты', '');
            baseCurr = baseCurrNum * USD;
            break;
        
        case 'EUR':
            baseCurrNum = +prompt('Введите количество валюты', '');
            baseCurr = baseCurrNum * EUR;
            break;
        
        case 'UAH':
            baseCurrNum = +prompt('Введите количество валюты', '');
            baseCurr = baseCurrNum * UAH;
            break;
        
        case 'MOL':
            baseCurrNum = +prompt('Введите количество валюты', '');
            baseCurr = baseCurrNum * MOL;
            break;
        
        case 'BTC':
            baseCurrNum = +prompt('Введите количество валюты', '');
            baseCurr = baseCurrNum * BTC;
            break;
    }
        if (baseCurrNum == '' || baseCurrNum == null || isNaN(baseCurrNum)) {
            alert('В этом поле доступны лишь числа');
        }

} while (baseCurrNum == '' || baseCurrNum == null || isNaN(baseCurrNum));


let  convCurrAtt = prompt('На какую валюту обмениваем? Доступны: USD, UAH, EUR, MOL, BTC', '');

if (convCurrAtt == '' || convCurrAtt == null || Number(convCurrAtt)) {
    alert('Введите, пожалуйста, правильное значение USD, UAH, EUR, MOL, BTC');
};

switch (convCurrAtt) {
    case 'USD':
        convCurrName = 'долларов США'
        convCurrAtt = USD;
        break;
    
    case 'EUR':
        convCurrName = 'евро';
        convCurrAtt =  EUR;
        break;
    
    case 'UAH':
        convCurrName = 'гривен';
        convCurrAtt =  UAH;
        break;
    
    case 'MOL':
        convCurrName = 'молдавских леев';
        convCurrAtt = MOL;
        break;
    
    case 'BTC':
        convCurrName = 'битков';
        convCurrAtt = BTC;
        break;
    };

// основная формула ковертации валюты

let resultOfEx = (baseCurr / convCurrAtt);
alert(`Ваш результат конвертации ${resultOfEx} ${convCurrName} `);

let again = confirm('Провести операцию снова?');

(again == true) ?
location.reload() : alert('До свидания!');


