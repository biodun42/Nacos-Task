document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.match(emailPattern)) {
    Swal.fire({
      icon: "error",
      title: "Invalid email address",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    return;
  }

  if (password.value.trim().length < 8) {
    Swal.fire({
      icon: "error",
      title: "Password must be at least 8 characters",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Signed in successfully",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  email.value = "";
  password.value = "";
});

document.getElementById("toggle-password").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
});

document.getElementById("clear-email").addEventListener("click", function () {
  document.getElementById("email").value = "";
});

document.getElementById("btn-google").addEventListener("click", function (event) {
  event.preventDefault();
  Swal.fire({
    icon: "info",
    title: "Feature not available yet",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
});
