const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent reload

  // Clear previous message
  message.textContent = "";
  message.className = "";

  // FRONTEND VALIDATION
  if (username.value.trim() === "" || password.value.trim() === "") {
    message.textContent = "❌ Username and Password required";
    message.classList.add("error");
    return;
  }

  if (password.value.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters";
    message.classList.add("error");
    return;
  }

  // SIMULATE BACKEND VALIDATION
  try {
    const fakeUser = {
      username: "rafin",
      password: "123456"
    };

    // Simulate a fake async "backend" with delay
    await new Promise((res) => setTimeout(res, 1000));

    if (
      username.value === fakeUser.username &&
      password.value === fakeUser.password
    ) {
      message.textContent = "✅ Login successful!";
      message.classList.add("success");
    } else {
      throw new Error("❌ Invalid credentials");
    }
  } catch (err) {
    message.textContent = err.message;
    message.classList.add("error");
  }
});
