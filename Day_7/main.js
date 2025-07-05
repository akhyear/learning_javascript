// main.js
import { Card } from "./Card.js";

const dashboard = document.getElementById("dashboard");

const data = [
  { title: "Learn JavaScript", completed: true },
  { title: "Study React", completed: false },
  { title: "Build Startup", completed: false },
  { title: "Deploy App", completed: true },     
  { title: "Write Tests", completed: true },
  { title: "Refactor Code", completed: false },
  { title: "Attend Meeting", completed: true },
  { title: "Review PRs", completed: false },
  { title: "Update Documentation", completed: true }];

// Loop through data and create a Card for each
data.forEach(item => {
  const card = Card(item);
  dashboard.appendChild(card);
});
