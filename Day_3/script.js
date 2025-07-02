// 🔢 Array to store tasks
let tasks = [];

// 🔗 DOM elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// 🧠 Function to add a task
function addTask() { // Get input value and add to tasks array 
  // This function is called when the user clicks the "Add Task" button
  // It retrieves the value from the input field, checks if it's not empty,so this fucntion have no parameters
  // and then adds it to the tasks array. Finally, it calls renderTasks to update the displayed list.
  const taskText = input.value.trim(); // Get input value and trim whitespace

  if (taskText === "") return; // Ignore empty input

  tasks.push(taskText); // Add to the task array
  input.value = ""; // Sets the value of the input field to an empty string, effectively clearing the text the user typed.
  renderTasks(); // ey fucntion nchei banano hoyese
}

// 🔁 Function to render tasks on screen
function renderTasks() {
  list.innerHTML = ""; // Clear old list

  // Loop through tasks and add to DOM
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // ✅ Mark complete on click
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // ❌ Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// 🧽 Function to delete task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove from array
  renderTasks(); // Re-render
}

// 🎯 Event listener for Add button
addBtn.addEventListener("click", addTask);
