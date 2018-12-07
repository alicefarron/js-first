function HomeWork() {
var money;
var time;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD','');

    var appData = {
        budget: money,
        timeData: time,
        expenses: {
           
        },
        optionalExpenses: {

        },
        income: {

        },
        savings: false
    }


for (i = 0; i < 2; i++) {
    var a = prompt('Введите обязательную статью расходов в этом месяце', '');
    var b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        console.log('bad');
        i--;
    }
    
} 

/*
let i = 0;
while (i < 2) {
    var a = prompt('Введите обязательную статью расходов в этом месяце', '');
    var b = prompt('Во сколько обойдется?', '');

    if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        console.log('bad');
        i--;
    }
i++;
} */

/*
let i = 0;
do {
    var a = prompt('Введите обязательную статью расходов в этом месяце', '');
    var b = prompt('Во сколько обойдется?', '');

    if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        console.log('bad');
        i--;
    }
i++;
} while (i < 2); */

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
        console.log('Низкий зароботок');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний бюджет');
    } else if (appData.moneyPerDay>2000) {
        console.log('Хороший заработок');
    } else {
        console.log('Ошибка');
    }


}

HomeWork();