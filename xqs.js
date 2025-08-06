let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let excuse = `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
  document.getElementById("excuse").innerHTML = excuse;
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = function () {
  generateExcuse();
};