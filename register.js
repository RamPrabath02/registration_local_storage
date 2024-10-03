document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const id_username = document.getElementById("username").value;
    const id_password = document.getElementById("password").value;
    const id_mail = document.getElementById("email").value;
    const id_retypePassword = document.getElementById("retype-password").value;
    const id_gender = document.getElementById("gender").value;
    const id_phoneNumber = document.getElementById("phonenumber").value;

    if (id_password !== id_retypePassword) {
      document.getElementById("success").innerHTML = "Passwords do not match";
      return;
    }

    const user_info = {
      username: id_username,
      email: id_mail,
      password: id_password,
      gender: id_gender,
      phone: id_phoneNumber,
    };

    const allUsers = JSON.parse(localStorage.getItem("all_users")) || [];

    const userExists = allUsers.some((user) => user.username === id_username);
    if (userExists) {
      document.getElementById("success").innerHTML = "Username already exists";
      return;
    }

    allUsers.push(user_info);

    localStorage.setItem("all_users", JSON.stringify(allUsers));

    console.log(allUsers);

    document.getElementById("success").innerHTML = "Registered Successfully";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
});
