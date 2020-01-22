let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '');
    let secondQuestion = prompt('Во сколько обойдется?', '');

    if ((typeof(firstQuestion) === 'string') && (typeof(firstQuestion) != null) && (typeof(secondQuestion) != null)
    && (firstQuestion !== '') && (secondQuestion !== '') && (firstQuestion.length < 50) &&  (secondQuestion.length < 50)) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
        i--;
    }
}

/*let i = 0;

do {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '');
    let secondQuestion = prompt('Во сколько обойдется?', '');

    if ((typeof(firstQuestion) === 'string') && (typeof(firstQuestion) != null) && (typeof(secondQuestion) != null)
        && (firstQuestion !== '') && (secondQuestion !== '') && (firstQuestion.length < 50) &&  (secondQuestion.length < 50)) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
        i--;
    }
    i++;
} while (i < 2);

while (i < 2) {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '');
    let secondQuestion = prompt('Во сколько обойдется?', '');

    if ((typeof(firstQuestion) === 'string') && (typeof(firstQuestion) != null) && (typeof(secondQuestion) != null)
        && (firstQuestion !== '') && (secondQuestion !== '') && (firstQuestion.length < 50) &&  (secondQuestion.length < 50)) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
        i--;
    }
    i++;
}*/



appData.moneyPerDay = appData.budget / 30;
console.log(appData.expenses);

alert('Ваш бюджет на один день: ' + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
