window.onload = function() {
  console.log("here");
  document.querySelector(".card").innerHTML = randomNumber();
  document.querySelector(".card").classList.add(randomSuits());
};
function randomNumber() {
  let number = [
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
    "K",
  ];
  let random = Math.floor(Math.random() * number.length);
  return number[random];
}
function randomSuits() {
  let suits = ["spades", "clubs", "hearts", "diamonds"];
  let random = Math.floor(Math.random() * suits.length);
  return suits[random];
}
