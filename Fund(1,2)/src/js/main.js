// JS Fundamentals 1
// Coding Challenge #1

let Mark1 = {
    mass: 78,
    height: 1.69,
}

let John1 = {
    mass: 92,
    height: 1.96,
}

let Mark2 = {
    mass: 95,
    height: 1.88,
}

let John2 = {
    mass: 85,
    height: 1.76,
}

let Orkhan = {
    mass: 76,
    height: 1.82,
}

function calculateBMI(mass, height) {
    return mass / (height * height);
}

let mark1BMI = calculateBMI(Mark1.mass, Mark1.height);
let john1BMI = calculateBMI(John1.mass, John1.height);
let mark2BMI = calculateBMI(Mark2.mass, Mark2.height);
let john2BMI = calculateBMI(John2.mass, John2.height);
let orkhanBMI = calculateBMI(Orkhan.mass, Orkhan.height)

console.log(`Mark1 BMI: ${mark1BMI.toFixed(2)}, John1 BMI: ${john1BMI.toFixed(2)}`);
console.log(`Mark2 BMI: ${mark2BMI.toFixed(2)}, John2 BMI: ${john2BMI.toFixed(2)}`)
console.log(`Orkhan BMI: ${orkhanBMI.toFixed(2)}`);

// Coding Challenge #2

if (mark1BMI > john1BMI) {
    console.log(`Mark1's BMI ${mark1BMI.toFixed(2)} is higher than John1's ${john1BMI.toFixed(2)}!`);
} else if (john1BMI > mark1BMI) {
    console.log(`John1's BMI ${john1BMI.toFixed(2)} is higher than Mark1's ${mark1BMI.toFixed(2)}!`);
} else {
    console.log(`Mark1 ${mark1BMI.toFixed(2)} and John1 ${john1BMI.toFixed(2)} have the same BMI!`);
}

if (mark2BMI > john2BMI) {
    console.log(`Mark2's BMI (${mark2BMI.toFixed(2)} is higher than John2's ${john2BMI.toFixed(2)}!`);
} else if (john2BMI > mark2BMI) {
    console.log(`John2's BMI (${john2BMI.toFixed(2)} is higher than Mark2's ${mark2BMI.toFixed(2)}!`);
} else {
    console.log(`Mark2 ${mark2BMI.toFixed(2)} and John2 ${john2BMI.toFixed(2)} have the same BMI!`);
}

// Coding Challenge #3

const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];


function calcAverage(scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}


function chooseWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg}!`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`Koalas win with an average score of ${koalasAvg}!`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg}.`);
    } else {
        console.log(`No team wins the trophy.`);
    }
}

// Data 1
let dolphinsAvg1 = calcAverage(dolphinsScores1);
let koalasAvg1 = calcAverage(koalasScores1);
console.log(`Data 1:`);
chooseWinner(dolphinsAvg1, koalasAvg1);

// Data Bonus 1
let dolphinsAvgBonus1 = calcAverage(dolphinsScoresBonus1);
let koalasAvgBonus1 = calcAverage(koalasScoresBonus1);
console.log(`Data Bonus 1:`);
chooseWinner(dolphinsAvgBonus1, koalasAvgBonus1);

// Data Bonus 2
let dolphinsAvgBonus2 = calcAverage(dolphinsScoresBonus2);
let koalasAvgBonus2 = calcAverage(koalasScoresBonus2);
console.log(`Data Bonus 2:`);
chooseWinner(dolphinsAvgBonus2, koalasAvgBonus2);

// Coding Challenge #4

const bills = [275, 40, 430];

const calculateTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

bills.forEach(bill => {
    const tip = calculateTip(bill);
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
});

// JS Fundamentals 2

// Coding Challenge #1

const calculateAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calculateAverage(44, 23, 71);
const avgKoalas1 = calculateAverage(65, 54, 49);

const avgDolphins2 = calculateAverage(85, 54, 41);
const avgKoalas2 = calculateAverage(23, 34, 27);


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins!`);
    }
}

console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("Data 2:");
checkWinner(avgDolphins2, avgKoalas2);

// Coding Challenge #2

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100)); // 15

const bills2 = [125, 555, 44];

const tips = bills2.map(calcTip);

const total = bills2.map((bill, index) => bill + tips[index]);

console.log(`Bills: ${bills2}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);

// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}

// Coding Challenge #4

const bills3 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips3 = [];
const totals = [];

const calcTip3 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills3.length; i++) {
    const tip = calcTip3(bills3[i]);
    tips3.push(tip);
    totals.push(bills3[i] + tip);
}

console.log('Bills:', bills3);
console.log('Tips:', tips3);
console.log('Totals:', totals);

const calcAverage3 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

const averageTotal = calcAverage3(totals);
console.log('Average Total:', averageTotal);

// Developer Skills & Editor Setup

// Coding Challenge #1

function printForecast(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} day(s)`;
    }
    console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

const numbers = [33, 2, 8];
numbers.sort();
console.log(numbers[1])