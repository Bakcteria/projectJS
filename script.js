let money = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

for (let i = 0; i < 2; i++){
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

appData.moneyPerDay = appData.budget / 30;

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