function HomeWork() {
var money;
var time;

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD','');

    var appData = {
        budget: money,
        timeData: time,
        expenses: {
            costs: howMuch
        },
        optionalExpenses: {

        },
        income: {

        },
        savings: false
    }

var costs = prompt('Введите обязательную статью расходов в этом месяце', '');
var howMuch = prompt('Во сколько обойдется?', '');

alert(money/30);
console.log(appData);
}

HomeWork();