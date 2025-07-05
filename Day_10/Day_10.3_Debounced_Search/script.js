// Debounce function: delays execution until 'wait' ms after last call
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Mock search function with fun results
function performSearch(query) {
  const resultsDiv = document.getElementById('searchResults');
  const funMessage = document.getElementById('funMessage');
  resultsDiv.innerHTML = ''; // Clear previous results

  if (!query.trim()) {
    funMessage.textContent = 'Yo, type something! Don’t leave me hanging! 😎';
    return;
  }

  // Mock search results
  const mockResults = [
    `Found "${query}" in the Cosmic Cookie Jar! 🍪`,
    `Whoa, "${query}"? That’s a spicy meatball! 🌮`,
    `"${query}" just zoomed past a black hole! 🚀`,
    `No "${query}" here, but I found a dancing llama! 🦙`,
    `"${query}"? My grandma’s recipe book has that! 📖`
  ];

  // Randomly pick 1-3 results
  const numResults = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < numResults; i++) {
    const result = mockResults[Math.floor(Math.random() * mockResults.length)];
    const resultElement = document.createElement('div');
    resultElement.textContent = result;
    resultsDiv.appendChild(resultElement);
  }

  funMessage.textContent = 'Look at these treasures! Keep typing for more! ✨';
}

// Debounced search handler
const debouncedSearch = debounce((query) => performSearch(query), 300);
// here debounce() function takes 2 arguments: the query and the wait time in milliseconds, and also here query is the input value from the user. and it pass as function argument to performSearch.   

// Event listener for input
document.getElementById('searchInput').addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});