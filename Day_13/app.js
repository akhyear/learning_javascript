let state = [];
let stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  state[currentIndex] = state[currentIndex] ?? initialValue;

  function setState(newValue) {
    state[currentIndex] = newValue;
    render(); // re-render entire component
  }

  stateIndex++;
  return [state[currentIndex], setState];
}

// Your mini "component"
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rafin");

  return `
    <h1>🔢 Count: ${count}</h1>
    <button onclick="increment()">➕ Increment</button>
    <button onclick="reset()">🔄 Reset</button>
    <h3>👤 Name: ${name}</h3>
    <input type="text" placeholder="Change name" oninput="setNameValue(this.value)" />
  `;
}

// DOM entry point
function render() {
  stateIndex = 0; // Reset hook index
  document.getElementById("root").innerHTML = Counter();
}

// Re-bind events to global scope
window.increment = function () {
  const [count, setCount] = useState(0);
  setCount(count + 1);
};

window.reset = function () {
  const [_, setCount] = useState(0);
  setCount(0);
};

window.setNameValue = function (value) {
  const [_, __, name, setName] = [...state];
  setName(value);
};

render();
// This code simulates a simple React-like state management system using hooks.
// It allows you to create a component with state and re-render it when the state changes.