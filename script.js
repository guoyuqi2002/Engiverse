document.getElementById("getCode").addEventListener("click", () => {
  alert("模拟：验证码已发送到您的手机");
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const { password, confirmPassword } = form;

  if (password.value !== confirmPassword.value) {
    alert("两次密码不一致！");
    return;
  }

  // 这里可接入真实后端；目前直接跳转
  window.location.href = "pending.html";
});
