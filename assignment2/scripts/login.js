function handleLogin(e) {
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username, password);
  e.preventDefault();
  console.log("logged");
}
