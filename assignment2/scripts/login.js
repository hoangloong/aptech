const randomToken =
  "oL2KA4n/T83wBSJ!6Hjr!LUm2LtV3xhWgFNflH2nc5uq-157wLirjzjjyhughogn5oyHcEUbYfBewY-Nb!?Lc-?f!Cxd9W-B6BJ!NEn8XD6lEhhwJrUfD=QdD2?5G5GeMkJPNypO7QcN4v/8sh?WgDLHJ5IDhqdcrqy6GvPqD4tZv=tEvHFwUxRw94C9d/3yFewtm8DY2iZgao7!tC9BFAuQUX6dPCxCL?fmhk0bPTQKV6DYMNI!!5b91ILOLKzY";

$(document).ready(() => {
  if (isAuth()) {
    const redirectURl = window.location.href.replace("login", "nextpage");
    window.location.replace(redirectURl);
  }
});

isAuth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

handleLogin = (e) => {
  e.preventDefault();
  const loginForm = document.getElementById("loginForm");

  if (loginForm.username.value && loginForm.password.value) {
    const isValidLoginData =
      loginForm.username.value.toUpperCase() === "ADMIN" &&
      loginForm.password.value === "Admin";
    if (isValidLoginData) {
      localStorage.setItem("token", randomToken);
      const redirectURl = window.location.href.replace("login", "nextpage");
      window.location.replace(redirectURl);
    } else {
      alert("'Tên đăng nhập' hoặc 'Mật khẩu' không đúng");
    }
  } else {
    alert("Yêu cầu nhập 'Tên đăng nhập' và 'Mật khẩu'");
  }
};
