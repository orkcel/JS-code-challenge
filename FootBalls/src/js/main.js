// Data Structures, Modern Operators and Strings

console.log('Coding Challenge #1');
// Coding Challenge #1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// Task 1
const [players1, players2] = game.players
console.log(players1, players2)

// Task 2
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

// Task 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Task 5

const {odds: {team1, x: draw, team2},} = game;
console.log(team1, draw, team2);

// Task 6
function printGoals(...players) {
    console.log(`${players.length} goals were scored`);
    players.forEach(player => console.log(player));
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);


// Task 7
team1 < team2 && console.log("Team 1 is likely to win");

console.log('Coding Challenge #2');
// Coding Challenge #2

// Task 1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// Task 2


console.log('Coding Challenge #3')
// Coding Challenge #3

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// Task 1
const events = [...new Set(gameEvents.values())];
console.log(events);

//Task 2
gameEvents.delete(64);
console.log(gameEvents);


console.log('Coding Challenge #4')
// Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').textContent = 'Convert'; // Добавим текст на кнопку

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.trim().toLowerCase().split('_');
        const output = first + (second ? second[0].toUpperCase() + second.slice(1) : '');
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

