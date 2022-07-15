print('rock')
print('paper')
print('scissors')

player1 = input('player 1 - choice:')
player2 = input('player 2 - choice:')

if player1 == player2:
    print('its a tie')
elif player1 == 'rock':
    if player2 == 'scissors':
        print('player 1 wins')
    elif player2 == 'paper':
        print('player 2 wins')
elif player1 == 'paper':
    if player2 == 'rock':
        print('player 1 wins')
    elif player2 == 'scissors':
        print('player 2 wins')
elif player1 == 'scissors':
    if player2 == 'rock':
        print('player 2 wins')
    elif player2 == 'paper':
        print('player 2 wins')
else:
    print('something went wrong')

    