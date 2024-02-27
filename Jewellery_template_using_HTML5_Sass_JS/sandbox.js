document.addEventListener("DOMContentLoaded", function () {
  let loginTab = document.getElementById("loginTab");
  let registerTab = document.getElementById("registerTab");

  let loginSection = document.querySelector(".login");
  let registerSection = document.querySelector(".register");

  registerSection.style.display = "none";

  loginTab.addEventListener("click", function () {
    loginSection.style.display = "block";
    registerSection.style.display = "none";
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  });

  registerTab.addEventListener("click", function () {
    registerSection.style.display = "block";
    loginSection.style.display = "none";
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
  });
});
