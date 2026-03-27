// Map and Set
const users = new Map();
const roles = new Set();

let id = 1;

// Add User
function addUser() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (!name || !role) {
    alert("Enter all fields");
    return;
  }

  // Store in Map
  users.set(id, { name, role });

  // Store in Set (unique roles)
  roles.add(role);

  id++;

  displayUsers();
  displayRoles();

  // clear input
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
}

// Display Users
function displayUsers() {
  const list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach((user, key) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${key} | ${user.name} (${user.role})`;
    list.appendChild(li);
  });
}

// Display Roles
function displayRoles() {
  const list = document.getElementById("roleList");
  list.innerHTML = "";

  roles.forEach((role) => {
    const li = document.createElement("li");
    li.textContent = role;
    list.appendChild(li);
  });
}