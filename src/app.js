/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  function mazo() {
    const suits = ["hearts", "spades", "clubs", "diamonds"];
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10 ",
      "J",
      "Q",
      "K"
    ];
    const cards = [];

    for (let s = 0; s < suits.length; s++) {
      for (let n = 0; n < suits.length; n++) {
        const suit = suits[s];
        const number = numbers[n];
        cards.push({ number, suit });
      }
    }
    this.console.log(cards);
  }
  return mazo;
};
