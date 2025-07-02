// 1. Variable: storing your name
let userName = "";

// 2. DOM elements
const input = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const colorBtn = document.getElementById("colorBtn");
const output = document.getElementById("output");

// 3. Event listeners
greetBtn.addEventListener("click", () => {
  userName = input.value;
  output.textContent = `Hello, ${userName}! Welcome to JavaScript 🚀`;
});

// 4. Background color changer
colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
