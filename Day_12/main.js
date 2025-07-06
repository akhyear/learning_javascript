const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

tasks.forEach(task => {
  task.addEventListener("dragstart", (e) => {
    task.classList.add("dragging");
    e.dataTransfer.setData("text/plain", task.id);
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

columns.forEach(column => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow drop
    column.style.background = "#f0fff0";
  });

  column.addEventListener("dragleave", () => {
    column.style.background = "#fff";
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.style.background = "#fff";

    const id = e.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id);

    column.appendChild(dragged);
  });
});
