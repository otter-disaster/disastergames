import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-scoundrel',
  imports: [],
  templateUrl: './scoundrel.html',
  styleUrl: './scoundrel.scss'
})
export class Scoundrel {
  protected readonly title = signal('scoundrel');

  showRules = false;
  shuffledDeck = [];
  discards = [];
  weapon = {name: 'none', value: 0, maxEnemy: 15, latestEnemyName: 'none', isActive: false, isVisible: false, card: {}, maxEnemyName: 'none'};
  turn = {healed: false, cardsPlayed: 0, unableToRun: false};
  cardValuesToNames = ['none', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace', 'none'];
  deck = [
    {suit: 1, value: 14, name: 'ace of clubs', imgsrc: '/disastergames/img/aceofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 2, name: 'two of clubs', imgsrc: '/disastergames/img/twoofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 3, name: 'three of clubs', imgsrc: '/disastergames/img/threeofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 4, name: 'four of clubs', imgsrc: '/disastergames/img/fourofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 5, name: 'five of clubs', imgsrc: '/disastergames/img/fiveofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 6, name: 'six of clubs', imgsrc: '/disastergames/img/sixofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 7, name: 'seven of clubs', imgsrc: '/disastergames/img/sevenofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 8, name: 'eight of clubs', imgsrc: '/disastergames/img/eightofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 9, name: 'nine of clubs', imgsrc: '/disastergames/img/nineofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 10, name: 'ten of clubs', imgsrc: '/disastergames/img/tenofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 11, name: 'jack of clubs', imgsrc: '/disastergames/img/jackofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 12, name: 'queen of clubs', imgsrc: '/disastergames/img/queenofclubs.jpg', class: 'card-image'},
    {suit: 1, value: 13, name: 'king of clubs', imgsrc: '/disastergames/img/kingofclubs.jpg', class: 'card-image'},
    {suit: 2, value: 14, name: 'ace of spades', imgsrc: '/disastergames/img/aceofspades.jpg', class: 'card-image'},
    {suit: 2, value: 2, name: 'two of spades', imgsrc: '/disastergames/img/twoofspades.jpg', class: 'card-image'},
    {suit: 2, value: 3, name: 'three of spades', imgsrc: '/disastergames/img/threeofspades.jpg', class: 'card-image'},
    {suit: 2, value: 4, name: 'four of spades', imgsrc: '/disastergames/img/fourofspades.jpg', class: 'card-image'},
    {suit: 2, value: 5, name: 'five of spades', imgsrc: '/disastergames/img/fiveofspades.jpg', class: 'card-image'},
    {suit: 2, value: 6, name: 'six of spades', imgsrc: '/disastergames/img/sixofspades.jpg', class: 'card-image'},
    {suit: 2, value: 7, name: 'seven of spades', imgsrc: '/disastergames/img/sevenofspades.jpg', class: 'card-image'},
    {suit: 2, value: 8, name: 'eight of spades', imgsrc: '/disastergames/img/eightofspades.jpg', class: 'card-image'},
    {suit: 2, value: 9, name: 'nine of spades', imgsrc: '/disastergames/img/nineofspades.jpg', class: 'card-image'},
    {suit: 2, value: 10, name: 'ten of spades', imgsrc: '/disastergames/img/tenofspades.jpg', class: 'card-image'},
    {suit: 2, value: 11, name: 'jack of spades', imgsrc: '/disastergames/img/jackofspades.jpg', class: 'card-image'},
    {suit: 2, value: 12, name: 'queen of spades', imgsrc: '/disastergames/img/queenofspades.jpg', class: 'card-image'},
    {suit: 2, value: 13, name: 'king of spades', imgsrc: '/disastergames/img/kingofspades.jpg', class: 'card-image'},
    {suit: 3, value: 2, name: 'two of diamonds', imgsrc: '/disastergames/img/twoofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 3, name: 'three of diamonds', imgsrc: '/disastergames/img/threeofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 4, name: 'four of diamonds', imgsrc: '/disastergames/img/fourofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 5, name: 'five of diamonds', imgsrc: '/disastergames/img/fiveofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 6, name: 'six of diamonds', imgsrc: '/disastergames/img/sixofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 7, name: 'seven of diamonds', imgsrc: '/disastergames/img/sevenofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 8, name: 'eight of diamonds', imgsrc: '/disastergames/img/eightofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 9, name: 'nine of diamonds', imgsrc: '/disastergames/img/nineofdiamonds.jpg', class: 'card-image'},
    {suit: 3, value: 10, name: 'ten of diamonds', imgsrc: '/disastergames/img/tenofdiamonds.jpg', class: 'card-image'},
    {suit: 4, value: 2, name: 'two of hearts', imgsrc: '/disastergames/img/twoofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 3, name: 'three of hearts', imgsrc: '/disastergames/img/threeofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 4, name: 'four of hearts', imgsrc: '/disastergames/img/fourofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 5, name: 'five of hearts', imgsrc: '/disastergames/img/fiveofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 6, name: 'six of hearts', imgsrc: '/disastergames/img/sixofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 7, name: 'seven of hearts', imgsrc: '/disastergames/img/sevenofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 8, name: 'eight of hearts', imgsrc: '/disastergames/img/eightofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 9, name: 'nine of hearts', imgsrc: '/disastergames/img/nineofhearts.jpg', class: 'card-image'},
    {suit: 4, value: 10, name: 'ten of hearts', imgsrc: '/disastergames/img/tenofhearts.jpg', class: 'card-image'},
  ];

  firstCard;
  secondCard;
  thirdCard;
  fourthCard;

  cardsVisible = false;
  shuffleVisible = true;
  youWin = false;
  youLose = false;

  hitPoints = 20;

  constructor() {
  }

  toggleRules() {
    this.showRules = !this.showRules;
  }

  shuffleDeck() {
    this.shuffledDeck = [];
    this.discards = [];
    let i = 0;
    let numbersAdded = [];
    while (i < this.deck.length) {
      let n = this.getRandomInt(this.deck.length);
      if (numbersAdded.indexOf(n) <= -1) {
        this.shuffledDeck.push(this.deck[n]);
        this.shuffledDeck[i].class = 'card-image';
        this.shuffledDeck[i].disabled = false;
        numbersAdded.push(n);
        i++;
      }
    }
    console.log(this.shuffledDeck);
    this.shuffleVisible = false;
    this.youWin = false;
    this.youLose = false;
    this.hitPoints = 20;
    this.turn.healed = false;
    this.turn.cardsPlayed = 0;
    this.turn.unableToRun = false;
    this.deal(true);
    this.cardsVisible = true;
    this.weapon = {name: 'none', value: 0, maxEnemy: 15, latestEnemyName: 'none', isActive: false, isVisible: false, card: {}, maxEnemyName: 'none'};
  }

  deal(didRun) {
    if (didRun) {
      this.firstCard = this.shuffledDeck[0];
      this.secondCard = this.shuffledDeck[1];
      this.thirdCard = this.shuffledDeck[2];
      this.fourthCard = this.shuffledDeck[3];
      this.shuffledDeck.splice(0, 4);
    } else if (this.shuffledDeck.length > 3) {
      if (this.firstCard.disabled) {
        this.firstCard = this.shuffledDeck[0];
        this.firstCard.disabled = false;
        this.shuffledDeck.splice(0, 1);
      }
      if (this.secondCard.disabled) {
        this.secondCard = this.shuffledDeck[0];
        this.secondCard.disabled = false;
        this.shuffledDeck.splice(0, 1);
      }
      if (this.thirdCard.disabled) {
        this.thirdCard = this.shuffledDeck[0];
        this.thirdCard.disabled = false;
        this.shuffledDeck.splice(0, 1);
      }
      if (this.fourthCard.disabled) {
        this.fourthCard = this.shuffledDeck[0];
        this.fourthCard.disabled = false;
        this.shuffledDeck.splice(0, 1);
      }
    } else if (this.hitPoints > 0) {
      this.endGame(true);
    } else {
      this.endGame(false);
    }
    console.log(this.shuffledDeck.length);
  }

  endGame(win) {
    this.cardsVisible = false;
    this.youWin = win;
    this.youLose = !win;
    this.shuffleVisible = true;
    this.weapon.isVisible = false;
  }

  runAway() {
    this.shuffledDeck.push(this.firstCard);
    this.shuffledDeck.push(this.secondCard);
    this.shuffledDeck.push(this.thirdCard);
    this.shuffledDeck.push(this.fourthCard);
    this.newTurn(true);
  }

  playFirstCard(card) {
    this.firstCard.disabled = true;
    this.playCard(card)
  }
  playSecondCard(card) {
    this.secondCard.disabled = true;
    this.playCard(card)
  }
  playThirdCard(card) {
    this.thirdCard.disabled = true;
    this.playCard(card)
  }
  playFourthCard(card) {
    this.fourthCard.disabled = true;
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
      if (card.value <= this.weapon.value) {
        this.weapon.value = card.value-1;
      }
      if (this.weapon.value == 1) {
        this.weapon.value = 0;
      }
      this.weapon.maxEnemy = card.value;
      this.weapon.maxEnemyName = this.cardValuesToNames[this.weapon.maxEnemy-2];
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
  }

  playWeapon(card) {
    if (this.weapon.value > 0) {
      this.discards.push(this.weapon.card);
    }
    this.weapon.name = card.name;
    this.weapon.value = card.value;
    this.weapon.maxEnemy = 15;
    this.weapon.latestEnemyName = 'none';
    this.weapon.card = card;
    this.weapon.isVisible = true;
    this.weapon.maxEnemyName = 'Ace';
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
