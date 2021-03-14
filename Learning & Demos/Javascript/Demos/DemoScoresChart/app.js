const warriorsGames = [
    {
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
];



// for (let game of warriorsGames) {
//     const { homeTeam, awayTeam } = game;
//     const gameLi = document.createElement('li');

//     const { team: hTeam, points: hPoints } = homeTeam;
//     const { team: aTeam, points: aPoints } = awayTeam;

//     const matchUp = `${aTeam} @ ${hTeam} `;
//     let scoresline;
//     if (aPoints > hPoints) {
//         scoresLine = `<b>${aPoints}</b> - ${hPoints}`;
//     } else {
//         scoresLine = `${aPoints} - <b>${hPoints}</b>`;
//     }

//     const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//     gameLi.classList.add(warriors.isWinner === true ? 'win' : "lose")

//     gameLi.innerHTML = `${matchUp} ${scoresLine} `;
//     console.log(scoresLine);


//     console.log(awayTeam.team, homeTeam.team)
//     ulParent.appendChild(gameLi);
// document.body.prepend(ulParent);
// }

// -----------Refactor

function gameChart(games, targetTeam) {
    const ulParent = document.createElement('ul');
    for (let game of games) {
        const { homeTeam, awayTeam } = game;
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game);
        gameLi.classList.add(isWinner(game, targetTeam) === true ? 'win' : "lose");
        ulParent.appendChild(gameLi);
    }

    return ulParent;
}
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
    const winner = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return winner.isWinner;
}
const getScoreLine = ({ homeTeam, awayTeam }) => {
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const matchUp = `${aTeam} @ ${hTeam} `;
    let scoresline;
    if (aPoints > hPoints) {
        scoresLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
        scoresLine = `${aPoints} - <b>${hPoints}</b>`;
    }

    return `${matchUp} ${scoresLine} `;
}



const gsSect = document.querySelector('#gs');
const hrSect = document.querySelector('#hr');
const gsChart = gameChart(warriorsGames, "Golden State");

gsSect.appendChild(gsChart);
debugger;
const hrChart = gameChart(warriorsGames, 'Houston');
hrSect.appendChild(hrChart);

console.log(gameChart(warriorsGames, 'Houston'));
console.log(gameChart(warriorsGames, "Golden State"));