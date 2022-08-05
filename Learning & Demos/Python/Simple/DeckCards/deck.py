from random import shuffle


class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(value, suit) for suit in suits for value in values]

    def __repr__(self):
        return f"Deck of {self.count()} cards"

    def count(self):
        return len(self.cards)

    def _deal(self, number):
        count = self.count()
        actual_remove = min([count, number])
        if count == 0:
            raise ValueError("All Cards have been dealt")
        card_hand = self.cards[-actual_remove:]
        self.cards = self.cards[:-actual_remove]
        return card_hand

    def deal_card(self):
        return self._deal(1)[0]

    def deal_hand(self, hand_size):
        return self._deal(hand_size)

    def shuffle(self, shuffle_times=1):
        if self.count() < 52:
            raise ValueError("Only full decks can be shuffled")
        for x in range(0, shuffle_times):
            print(self.cards)
            shuffle(self.cards)
        return self


deck = Deck()
deck.shuffle()
card = deck.deal_card()
print(card)
hand = deck.deal_hand(50)
card2 = deck.deal_card()
print(card2)
print(deck.cards)
card2 = deck.deal_card()
