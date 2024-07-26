let money, date;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    date = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
}

function chooseExpenses() {
    for (let i = 0; i < 1; i++){
        let quest1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
            quest2 = prompt("Во сколько обойдется?", '');
    
            if ((typeof(quest1)) === 'string' && (typeof(quest1)) != null && (typeof(quest2)) != null
                && quest1 != '' && quest2 != '' && quest1.length < 50) {
                console.log("true");
                appData.expenses[quest1] = quest2;
            }
            else {
                i--;
            }
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min");
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium");
}
else if (appData.moneyPerDay > 2000) {
    console.log("Big");
}
else {
    console.log("Error");
}

console.log(appData);

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();