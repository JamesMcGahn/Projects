from random import randint

print('rock')
print('paper')
print('scissors')

random_int = randint(0,2)
if random_int == 0:
    computer_choice = 'rock'
elif random_int == 1:
    computer_choice = 'paper'
else:
    computer_choice = 'scissors'


player1 = input('player 1 - choice: ').lower()

print(f'player 2 - choice: {computer_choice}')
if player1 == computer_choice:
    print('its a tie')
elif player1 == 'rock':
    if computer_choice == 'scissors':
        print('player 1 wins')
    elif computer_choice == 'paper':
        print('player 2 wins')
elif player1 == 'paper':
    if computer_choice == 'rock':
        print('player 1 wins')
    elif computer_choice == 'scissors':
        print('player 2 wins')
elif player1 == 'scissors':
    if computer_choice == 'rock':
        print('player 2 wins')
    elif computer_choice == 'paper':
        print('player 2 wins')
else:
    print('enter valid move')