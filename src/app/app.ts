import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('scoundrel');
  firstCardDisabled = false;
  secondCardDisabled = false;
  thirdCardDisabled = false;
  fourthCardDisabled = false;
  shuffledDeck = [];
  discards = [];
  weapon = {name: '', value: 0, maxEnemy: 15, latestEnemyName: '', isActive: false, isVisible: false, card: {}};
  turn = {healed: false, cardsPlayed: 0, unableToRun: false};
  deck = [
    {suit: 1, value: 14, name: 'ace of clubs', imgsrc: '/disastergames/img/aceofclubs.png', class: 'card-image'},
    {suit: 1, value: 2, name: 'two of clubs', imgsrc: '/disastergames/img/twoofclubs.png', class: 'card-image'},
    {suit: 1, value: 3, name: 'three of clubs', imgsrc: '/disastergames/img/threeofclubs.png', class: 'card-image'},
    {suit: 1, value: 4, name: 'four of clubs', imgsrc: '/disastergames/img/fourofclubs.png', class: 'card-image'},
    {suit: 1, value: 5, name: 'five of clubs', imgsrc: '/disastergames/img/fiveofclubs.png', class: 'card-image'},
    {suit: 1, value: 6, name: 'six of clubs', imgsrc: '/disastergames/img/sixofclubs.png', class: 'card-image'},
    {suit: 1, value: 7, name: 'seven of clubs', imgsrc: '/disastergames/img/sevenofclubs.png', class: 'card-image'},
    {suit: 1, value: 8, name: 'eight of clubs', imgsrc: '/disastergames/img/eightofclubs.png', class: 'card-image'},
    {suit: 1, value: 9, name: 'nine of clubs', imgsrc: '/disastergames/img/nineofclubs.png', class: 'card-image'},
    {suit: 1, value: 10, name: 'ten of clubs', imgsrc: '/disastergames/img/tenofclubs.png', class: 'card-image'},
    {suit: 1, value: 11, name: 'jack of clubs', imgsrc: '/disastergames/img/jackofclubs.png', class: 'card-image'},
    {suit: 1, value: 12, name: 'queen of clubs', imgsrc: '/disastergames/img/queenofclubs.png', class: 'card-image'},
    {suit: 1, value: 13, name: 'king of clubs', imgsrc: '/disastergames/img/kingofclubs.png', class: 'card-image'},
    {suit: 2, value: 14, name: 'ace of spades', imgsrc: '/disastergames/img/aceofspades.png', class: 'card-image'},
    {suit: 2, value: 2, name: 'two of spades', imgsrc: '/disastergames/img/twoofspades.png', class: 'card-image'},
    {suit: 2, value: 3, name: 'three of spades', imgsrc: '/disastergames/img/threeofspades.png', class: 'card-image'},
    {suit: 2, value: 4, name: 'four of spades', imgsrc: '/disastergames/img/fourofspades.png', class: 'card-image'},
    {suit: 2, value: 5, name: 'five of spades', imgsrc: '/disastergames/img/fiveofspades.png', class: 'card-image'},
    {suit: 2, value: 6, name: 'six of spades', imgsrc: '/disastergames/img/sixofspades.png', class: 'card-image'},
    {suit: 2, value: 7, name: 'seven of spades', imgsrc: '/disastergames/img/sevenofspades.png', class: 'card-image'},
    {suit: 2, value: 8, name: 'eight of spades', imgsrc: '/disastergames/img/eightofspades.png', class: 'card-image'},
    {suit: 2, value: 9, name: 'nine of spades', imgsrc: '/disastergames/img/nineofspades.png', class: 'card-image'},
    {suit: 2, value: 10, name: 'ten of spades', imgsrc: '/disastergames/img/tenofspades.png', class: 'card-image'},
    {suit: 2, value: 11, name: 'jack of spades', imgsrc: '/disastergames/img/jackofspades.png', class: 'card-image'},
    {suit: 2, value: 12, name: 'queen of spades', imgsrc: '/disastergames/img/queenofspades.png', class: 'card-image'},
    {suit: 2, value: 13, name: 'king of spades', imgsrc: '/disastergames/img/kingofspades.png', class: 'card-image'},
    {suit: 3, value: 2, name: 'two of diamonds', imgsrc: '/disastergames/img/twoofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 3, name: 'three of diamonds', imgsrc: '/disastergames/img/threeofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 4, name: 'four of diamonds', imgsrc: '/disastergames/img/fourofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 5, name: 'five of diamonds', imgsrc: '/disastergames/img/fiveofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 6, name: 'six of diamonds', imgsrc: '/disastergames/img/sixofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 7, name: 'seven of diamonds', imgsrc: '/disastergames/img/sevenofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 8, name: 'eight of diamonds', imgsrc: '/disastergames/img/eightofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 9, name: 'nine of diamonds', imgsrc: '/disastergames/img/nineofdiamonds.png', class: 'card-image'},
    {suit: 3, value: 10, name: 'ten of diamonds', imgsrc: '/disastergames/img/tenofdiamonds.png', class: 'card-image'},
    {suit: 4, value: 2, name: 'two of hearts', imgsrc: '/disastergames/img/twoofhearts.png', class: 'card-image'},
    {suit: 4, value: 3, name: 'three of hearts', imgsrc: '/disastergames/img/threeofhearts.png', class: 'card-image'},
    {suit: 4, value: 4, name: 'four of hearts', imgsrc: '/disastergames/img/fourofhearts.png', class: 'card-image'},
    {suit: 4, value: 5, name: 'five of hearts', imgsrc: '/disastergames/img/fiveofhearts.png', class: 'card-image'},
    {suit: 4, value: 6, name: 'six of hearts', imgsrc: '/disastergames/img/sixofhearts.png', class: 'card-image'},
    {suit: 4, value: 7, name: 'seven of hearts', imgsrc: '/disastergames/img/sevenofhearts.png', class: 'card-image'},
    {suit: 4, value: 8, name: 'eight of hearts', imgsrc: '/disastergames/img/eightofhearts.png', class: 'card-image'},
    {suit: 4, value: 9, name: 'nine of hearts', imgsrc: '/disastergames/img/nineofhearts.png', class: 'card-image'},
    {suit: 4, value: 10, name: 'ten of hearts', imgsrc: '/disastergames/img/tenofhearts.png', class: 'card-image'},
  ];

  firstCard;
  secondCard;
  thirdCard;
  fourthCard;

  cardsVisible = false;
  runVisible = false;
  shuffleVisible = true;
  youWin = false;
  youLose = false;

  hitPoints = 20;

  constructor() {
  }

  enableAllCards() {
    this.firstCardDisabled = false;
    this.secondCardDisabled = false;
    this.thirdCardDisabled = false;
    this.fourthCardDisabled = false;
    this.firstCard.class = 'card-iamge';
    this.secondCard.class = 'card-image';
    this.thirdCard.class = 'card-image';
    this.fourthCard.class = 'card-image';
  }

  shuffleDeck() {
    this.shuffledDeck = [];
    let i = 0;
    let numbersAdded = [];
    while (i < this.deck.length) {
      let n = this.getRandomInt(this.deck.length);
      if (numbersAdded.indexOf(n) <= -1) {
        this.shuffledDeck.push(this.deck[n]);
        numbersAdded.push(n);
        i++;
      }
    }
    console.log(this.shuffledDeck);
    this.shuffleVisible = false;
    this.youWin = false;
    this.youLose = false;
    this.runVisible = true;
    this.hitPoints = 20;
    this.deal(true);
    this.cardsVisible = true;
    this.enableAllCards();
  }

  deal(didRun) {
    if (didRun) {
      this.firstCard = this.shuffledDeck[0];
      this.secondCard = this.shuffledDeck[1];
      this.thirdCard = this.shuffledDeck[2];
      this.fourthCard = this.shuffledDeck[3];
      this.shuffledDeck.splice(0, 4);
    } else if (this.shuffledDeck.length > 3) {
      if (this.firstCardDisabled) {
        this.firstCard = this.shuffledDeck[0];
        this.firstCardDisabled = false;
        this.shuffledDeck.splice(0, 1);
      }
      if (this.secondCardDisabled) {
        this.secondCard = this.shuffledDeck[0];
        this.secondCardDisabled = false;
        this.shuffledDeck.splice(0, 1);
      }
      if (this.thirdCardDisabled) {
        this.thirdCard = this.shuffledDeck[0];
        this.thirdCardDisabled = false;
        this.shuffledDeck.splice(0, 1);
      }
      if (this.fourthCardDisabled) {
        this.fourthCard = this.shuffledDeck[0];
        this.fourthCardDisabled = false;
        this.shuffledDeck.splice(0, 1);
      }
    } else {
      this.endGame(true);
    }
    console.log(this.shuffledDeck.length);
  }

  endGame(win) {
    this.cardsVisible = false;
    this.youWin = win;
    this.youLose = !win;
    this.shuffleVisible = true;
    this.runVisible = false;
    this.weapon.isVisible = false;
  }

  runAway() {
    this.shuffledDeck.push(this.firstCard);
    this.shuffledDeck.push(this.secondCard);
    this.shuffledDeck.push(this.thirdCard);
    this.shuffledDeck.push(this.fourthCard);
    this.turn.unableToRun = true;
    this.newTurn(true);
  }

  playFirstCard(card) {
    this.firstCardDisabled = true;
    this.playCard(card)
  }
  playSecondCard(card) {
    this.secondCardDisabled = true;
    this.playCard(card)
  }
  playThirdCard(card) {
    this.thirdCardDisabled = true;
    this.playCard(card)
  }
  playFourthCard(card) {
    this.fourthCardDisabled = true;
    this.playCard(card)
  }

  playCard(card) {
    console.log(card.name);
    switch (card.suit) {
      case 1:
        this.playEnemy(card);
        break;
      case 2:
        this.playEnemy(card);
        break;
      case 3:
        this.playWeapon(card);
        break;
      case 4:
        this.playPotion(card);
        break;
      default:
        console.log('oopsie doopsie! your cards are kapootsie!');
        break;
    }
    this.turn.cardsPlayed++;
    card.class = 'card-image-disabled';
    this.turn.unableToRun = true;
    if (this.turn.cardsPlayed > 2) {
      this.newTurn(false);
    }
  }

  playEnemy(card) {
    if (this.weapon.isActive && this.weapon.maxEnemy > card.value) {
      if (card.value - this.weapon.value > 0) {
        this.hitPoints = this.hitPoints - (card.value - this.weapon.value);
      }
      this.weapon.maxEnemy = card.value;
      this.weapon.latestEnemyName = card.name;
    } else {
      this.hitPoints = this.hitPoints - card.value;
    }
    if (this.hitPoints > 0) {
      this.discards.push(card);
      console.log(this.shuffledDeck.length);
    } else {
      this.endGame(false);
    }
  }

  playPotion(card) {
    if (!this.turn.healed) {
      this.turn.healed = true;
      if (this.hitPoints + card.value > 20) {
        this.hitPoints = 20;
      } else {
        this.hitPoints += card.value;
      }
    }
    this.discards.push(card);
    console.log(this.shuffledDeck.length);
  }

  playWeapon(card) {
    if (this.weapon.value > 0) {
      this.discards.push(this.weapon.card);
    }
    this.weapon.name = card.name;
    this.weapon.value = card.value;
    this.weapon.maxEnemy = 14;
    this.weapon.latestEnemyName = 'none';
    this.weapon.card = card;
    this.weapon.isVisible = true;
  }

  toggleWeapon() {
    this.weapon.isActive = !this.weapon.isActive;
    console.log(this.weapon.isActive);
  }

  newTurn(didRun) {
    this.turn.healed = false;
    this.turn.cardsPlayed = 0;
    this.turn.unableToRun = didRun;
    this.deal(didRun);
  }

  // used to shuffle
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
