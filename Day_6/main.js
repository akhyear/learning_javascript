let state = {
  tasks: [],
  filter: "all"
};

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  state.tasks.push({ text, completed: false });
  input.value = "";
  render();
});

// Filter Buttons
document.querySelectorAll("button[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.filter = btn.dataset.filter;
    render();
  });
});

// Event Delegation for taskList
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const index = e.target.dataset.index;
    state.tasks[index].completed = !state.tasks[index].completed;
    render();
  } else if (e.target.classList.contains("delete")) {
    const index = e.target.parentElement.dataset.index;
    state.tasks.splice(index, 1);
    render();
  }
});

// Render Function
function render() {
  taskList.innerHTML = "";

  const filtered = state.tasks.filter(task => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "incomplete") return !task.completed;
    return true;
  });

  filtered.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.dataset.index = i;
    if (task.completed) li.classList.add("completed");

    // Fade-in animation
    li.style.opacity = 0;
    setTimeout(() => {
      li.style.transition = "opacity 0.5s";
      li.style.opacity = 1;
    }, 10);

    // Delete Button
    const del = document.createElement("button");
    del.textContent = "❌";
    del.classList.add("delete");
    li.appendChild(del);

    taskList.appendChild(li);
  });
}
