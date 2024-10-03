document.addEventListener("DOMContentLoaded", () => {
    const currentUsername = localStorage.getItem('current_user');
    const allUsers = JSON.parse(localStorage.getItem('all_users')) || [];

    const info = allUsers.find(user => user.username === currentUsername);

    if (!info) {
      alert("No user info found. Redirecting to login page.");
      window.location.href = 'login.html';
      return;
    }

    const welcome = document.getElementById('welcome');
    welcome.innerHTML += info.username;

    const gender = document.getElementById('gender');
    gender.innerHTML += info.gender;

    const pnumber = document.getElementById('phoneNumber');
    pnumber.innerHTML += info.phone;

    const email = document.getElementById('email');
    email.innerHTML += info.email;

    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => {
      const loggingOut = document.getElementById('loggingout');
      loggingOut.innerHTML = "Logging out in 2 seconds...";
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000);
    });

    const deleteId = document.getElementById('deleteID');
    deleteId.addEventListener('click', () => {
      const remainingUsers = allUsers.filter(user => user.username !== currentUsername);
      localStorage.setItem('all_users', JSON.stringify(remainingUsers));
      localStorage.removeItem('current_user');

      const deleted = document.getElementById('deleting');
      deleted.innerHTML = "Deleted";
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    });
});
