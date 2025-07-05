const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const profileDiv = document.getElementById("profile");

searchBtn.addEventListener("click", async () => {
  const username = usernameInput.value.trim();
  if (!username) return alert("Enter a username");

  profileDiv.innerHTML = "⏳ Loading...";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");

    const data = await res.json();

    profileDiv.innerHTML = `
      <img src="${data.avatar_url}" alt="avatar" />
      <h2>${data.name}</h2>
      <p>@${data.login}</p>
      <p>🔗 <a href="${data.html_url}" target="_blank">GitHub Profile</a></p>
      <p>📦 Public Repos: ${data.public_repos}</p>
    `;
  } catch (err) {
    profileDiv.innerHTML = `<p style="color:red">❌ ${err.message}</p>`;
  }
});
