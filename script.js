let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD','');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

    var appData = {
        budget: money,
        timeData: time,
        expenses: {
           
        },
        optionalExpenses: {

        },
        income: {

        },
        savings: true,
        chooseExpenses: function() {
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
        },

        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },

        detectLevel: function() {
            if(appData.moneyPerDay < 100) {
                console.log('Низкий зароботок');
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('Средний бюджет');
            } else if (appData.moneyPerDay>2000) {
                console.log('Хороший заработок');
            } else {
                console.log('Ошибка');
            }
        },

        checkSaving: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
        
                appData.monthIncore = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " +appData.monthIncore);
            }
        },

        chooseOptExpenses: function() {
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?", "");
                appData.optionalExpenses[i] = questionOptExpenses;
            }
        },

        chooseIncome: function() {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)","");
            
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                console.log("Вы ввели некорректные данные");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }

            appData.income.forEach (function (item, i) {
                alert("Способы дополнительного заработка " + (i+1) + ' - ' + item);
            });

        }    

    };

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}