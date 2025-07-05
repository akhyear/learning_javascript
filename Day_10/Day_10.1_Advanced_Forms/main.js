const form = document.getElementById("weirdForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const fullName = data.get("fullName");
  const email = data.get("email");
  const power = data.get("superpower");
  const agree = data.get("agree"); // returns null if not checked

  if (!fullName || !email || !agree) {
    output.innerHTML = "❌ You must fill out everything! No evil allowed.";
    return;
  }

  output.innerHTML = `
    ✅ Application Received! <br/>
    👤 Name: ${fullName} <br/>
    📧 Email: ${email} <br/>
    🦸 Superpower: ${power} <br/>
    🚫 Villain? ${agree ? "Definitely Not" : "Hmm..."}
  `;
});
