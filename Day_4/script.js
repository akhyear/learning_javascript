// 1. Load saved tasks from localStorage or use an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔗 DOM elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const clearBtn = document.getElementById("clearAllBtn");
const list = document.getElementById("taskList");

// 🧠 Function to save tasks to localStorage
function addTask() {
  const text = input.value.trim();

  if (!text) return;

  const newTask = {
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  input.value = "";
}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 🔁 Function to render tasks on screen
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // ✅ Click to mark complete
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    // ❌ Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// 🧽 Function to clear all tasks
clearBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks();
  renderTasks();
});

// 🎯 Event listener for Add button
addBtn.addEventListener("click", addTask);
renderTasks();  // Call once when page loads
