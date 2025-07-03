import { Task } from "./task.js";

let tasks = [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const addTask = () => {
  const text = input.value.trim();
  if (!text) return;

  const newTask = new Task(text);
  tasks.push(newTask);
  renderTasks();
  input.value = "";
};

const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      task.toggle();
      renderTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
};

addBtn.addEventListener("click", addTask);
