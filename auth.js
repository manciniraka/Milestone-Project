function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        alert("Password tidak sama!");
        return;
    }

    let users = getUsers();

    let exists = users.find(u => u.email === email);
    if (exists) {
        alert("Email sudah terdaftar!");
        return;
    }

    users.push({ name, email, password });
    saveUsers(users);

    alert("Register berhasil!");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = getUsers();

    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Email atau password salah!");
    }
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("Logout berhasil!");
    window.location.href = "login.html";
}

function showUsers() {
    let users = getUsers();

    let container = document.getElementById("userList");

    if (!container) return;

    let html = "<h3>Daftar User</h3>";

    users.forEach((user, index) => {
        html += `
            <div style="border-bottom:1px solid #ccc; padding:10px;">
                <p><b>${user.name}</b> (${user.email})</p>

                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

function editUser(index) {
    let users = getUsers();

    let newPassword = prompt("Masukkan password baru:");

    if (!newPassword) return;

    users[index].password = newPassword;

    saveUsers(users);

    alert("Password berhasil diupdate!");
    showUsers();
}

function deleteUser(index) {
    let users = getUsers();

    let confirmDelete = confirm("Yakin mau hapus user ini?");
    if (!confirmDelete) return;

    users.splice(index, 1);

    saveUsers(users);

    alert("User berhasil dihapus!");
    showUsers();
}

function checkLogin() {
    let user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
        alert("Silakan login dulu!");
        window.location.href = "login.html";
    }
}