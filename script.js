document.getElementById("getCode").addEventListener("click", () => {
  alert("模拟：验证码已发送到您的手机");
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("两次密码不一致！");
    return;
  }

  document.getElementById("message").textContent = "注册成功（模拟）！";
  form.reset();
});
