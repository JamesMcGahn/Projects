from random import randint 

random_numer = randint(1,10)
isGameOver = False

while not isGameOver:
   guess = input('Guess a number from 1-10: ')
   guess = int(guess)
   if guess > random_numer:
        print('too high guess')
   elif guess < random_numer:
        print('too low guess')
   elif int(guess) == random_numer:
        print('you won')
        playAgain = input('play again Y/N? ').lower()
        if playAgain == 'y':
            isGameOver = False
            random_numer = randint(1,10)
        else:    
            isGameOver = True
            print('See you Next Time')
        
        

