// Card.js

export function Card(props) {
  const { title, completed } = props;

  const wrapper = document.createElement("div");
  wrapper.className = "card";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const status = document.createElement("p");
  status.textContent = completed ? "✅ Done" : "❌ Not Done";

  wrapper.appendChild(heading);
  wrapper.appendChild(status);

  return wrapper;
}
