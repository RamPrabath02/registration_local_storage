document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const allUsers = JSON.parse(localStorage.getItem('all_users')) || [];
        const idUsername = document.getElementById('username').value;
        const idPassword = document.getElementById('password').value;

        const currentUser = allUsers.find(user => user.username === idUsername);

        if (!currentUser) {
            alert("Invalid Username");
            return;
        }

        if (currentUser.password === idPassword) {
            localStorage.setItem('current_user', idUsername);
            document.getElementById('success').innerHTML = "Login success";
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        } else {
            document.getElementById('success').innerHTML = "Invalid Password";
        }
    });
});
