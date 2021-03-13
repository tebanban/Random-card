/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".top-suit").classList.add(generateRandomSuit());
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suits = ["heart", "diamond", "spade", "club"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
