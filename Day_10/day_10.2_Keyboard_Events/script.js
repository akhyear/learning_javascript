// Get DOM elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const popup = document.getElementById('popup');
const character = document.getElementById('character');
const logList = document.getElementById('logList');

// Initialize character position
let charX = 100;
let charY = 100;
character.style.left = `${charX}px`;
character.style.top = `${charY}px`;

// Function to add message to log
function addLog(message) {
  const li = document.createElement('li');
  li.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
  logList.prepend(li); // Add to top of list
}

// Enter key: Submit form
nameInput.addEventListener('keydown Cruising', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent default form submission
    const name = nameInput.value.trim();
    if (name) {
      addLog(`Form submitted with name: ${name}`);
      nameInput.value = ''; // Clear input
    } else {
      addLog('Please enter a name!');
    }
  }
});

// Esc key: Close popup
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.style.display = 'none';
    addLog('Popup closed with Esc');
  }
});

// Arrow keys: Move character
document.addEventListener('keydown', (e) => {
  const step = 10; // Pixels to move per key press
  if (e.key === 'ArrowUp') {
    charY = Math.max(0, charY - step); // Prevent moving off top
    addLog('Moved up');
  } else if (e.key === 'ArrowDown') {
    charY = Math.min(window.innerHeight - 40, charY + step); // Prevent moving off bottom
    addLog('Moved down');
  } else if (e.key === 'ArrowLeft') {
    charX = Math.max(0, charX - step); // Prevent moving off left
    addLog('Moved left');
  } else if (e.key === 'ArrowRight') {
    charX = Math.min(window.innerWidth - 40, charX + step); // Prevent moving off right
    addLog('Moved right');
  }
  // Update character position
  character.style.left = `${charX}px`;
  character.style.top = `${charY}px`;
});

// Ctrl+S: Save position
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault(); // Prevent browser save dialog
    addLog(`Saved character position at x:${charX}, y:${charY}`);
  }
});