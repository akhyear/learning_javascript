let puppyState = {
  mood: "happy",
  energy: 50
};

function makeHappy() {
  puppyState.mood = "happy";
  puppyState.energy = 50;
  updateUI();
}

function makeSad() {
  puppyState.mood = "sad";
  puppyState.energy = 10;
  updateUI();
}

function makeHyper() {
  puppyState.mood = "hyper";
  puppyState.energy = 90;
  updateUI();
}

function updateUI() {
  const moodDiv = document.getElementById("puppyMood");
  if (puppyState.mood === "happy") {
    moodDiv.innerHTML = "🐶 Happy Puppy! Ready to play!";
    moodDiv.style.borderColor = "#87ceeb";
    moodDiv.style.backgroundColor = "#e6f3ff";
  } else if (puppyState.mood === "sad") {
    moodDiv.innerHTML = "😢 Sad Puppy. Needs a hug!";
    moodDiv.style.borderColor = "#4682b4";
    moodDiv.style.backgroundColor = "#b0c4de";
  } else if (puppyState.mood === "hyper") {
    moodDiv.innerHTML = "🌀 Hyper Puppy! ZOOMIES!";
    moodDiv.style.borderColor = "#ff4500";
    moodDiv.style.backgroundColor = "#ffe4e1";
  }
}

// Initialize UI on page load
updateUI();