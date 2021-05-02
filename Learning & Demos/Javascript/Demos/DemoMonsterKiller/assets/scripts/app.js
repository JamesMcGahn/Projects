const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = []


adjustHealthBars(chosenMaxLife);

function attackMonster(attackMode) {
    const damage = dealMonsterDamage(attackMode);
    currentMonsterHealth -= damage;
    const attackType = damage === STRONG_ATTACK_VALUE ? 'Strong Attack' : 'Weak Attack';
    writeToLog(attackType, damage, currentMonsterHealth, currentPlayerHealth, 'Monster', false)
    endRound();
}
function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth
        increasePlayerHealth(healValue);
        currentPlayerHealth = chosenMaxLife;
    } else {
        healValue = HEAL_VALUE;
        increasePlayerHealth(HEAL_VALUE);
        currentPlayerHealth += HEAL_VALUE
    }
    writeToLog('Player Heal', healValue, currentMonsterHealth, currentPlayerHealth, 'None', false)
    endRound();
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog('Attack', playerDamage, currentMonsterHealth, currentPlayerHealth, 'Player', false)
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth)
        writeToLog('Heal', initialPlayerHealth, currentMonsterHealth, currentPlayerHealth, 'Player', false)
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won')
        writeToLog('Game Player', 0, currentMonsterHealth, currentPlayerHealth, 'None', true)
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('you lost')
        writeToLog('Game Monster', 0, currentMonsterHealth, currentPlayerHealth, 'None', true)
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('tie')
        writeToLog('Game Tie', 0, currentMonsterHealth, currentPlayerHealth, 'None', true)
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        writeToLog('Game Reset', 0, currentMonsterHealth, currentPlayerHealth, 'None', true)
        reset()
    }
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function writeToLog(event, val, monsterHealth, playerHealth, target, game) {
    let logEntry;

    logEntry = {
        event: event,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
        target: target,
        gameOver: game
    }
    battleLog.push(logEntry)
}

function printLogHandler() {
    for (const logEntry of battleLog) {
        for (const key in logEntry) {
            console.log(`${key} --- ${logEntry[key]}`)
        }
    }
}

attackBtn.addEventListener('click', function () {
    attackMonster(ATTACK_VALUE);
});
strongAttackBtn.addEventListener('click', function () {
    attackMonster(STRONG_ATTACK_VALUE);
});

healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler)