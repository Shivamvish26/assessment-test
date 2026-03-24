//  User Constructor
function User(username, password) {
  this.username = username;
  this.password = password;
  this.role = "user";
  this.isLoggedIn = false;
}

User.prototype.login = function (password) {
  if (this.password === password) {
    this.isLoggedIn = true;
    return true;
  }
  return false;
};

User.prototype.logout = function () {
  this.isLoggedIn = false;
};

//Admin Constructor — inherits from User
function Admin(username, password) {
  User.call(this, username, password); // inherit User properties
  this.role = "admin";
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getUsers = function (allUsers) {//admin can view all users
  return allUsers;
};

var registeredUsers = [];
var currentUser = null;

function showTab(tab) {
  var btns = document.querySelectorAll(".tabs button");
  document.getElementById("signupForm").style.display =
    tab === "signup" ? "block" : "none";
  document.getElementById("signinForm").style.display =
    tab === "signin" ? "block" : "none";
  btns[0].className = tab === "signup" ? "active" : "";
  btns[1].className = tab === "signin" ? "active" : "";
  hideMessage();
}

function signUp() {
  var username = document.getElementById("su_username").value.trim();
  var password = document.getElementById("su_password").value.trim();
  var role = document.getElementById("su_role").value;

  if (!username || !password) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  var exists = registeredUsers.find(function (u) {
    return u.username === username;
  });
  if (exists) {
    showMessage("Username already taken!", "error");
    return;
  }

  var newUser =
    role === "admin"
      ? new Admin(username, password)
      : new User(username, password);
  registeredUsers.push(newUser);

  document.getElementById("su_username").value = "";
  document.getElementById("su_password").value = "";

  showMessage("Account created! Please Sign In.", "success");
  showTab("signin");
}

function signIn() {
  var username = document.getElementById("si_username").value.trim();
  var password = document.getElementById("si_password").value.trim();

  if (!username || !password) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  var user = registeredUsers.find(function (u) {
    return u.username === username;
  });

  if (!user) {
    showMessage("User not found!", "error");
    return;
  }

  if (!user.login(password)) {
    showMessage("Wrong password!", "error");
    return;
  }

  currentUser = user;
  showDashboard();
}

function logOut() {
  currentUser.logout();
  currentUser = null;

  document.getElementById("dashboard").style.display = "none";
  document.getElementById("tabs").style.display = "flex";
  showTab("signup");
  showMessage("Logged out successfully.", "success");
}

function showDashboard() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("signinForm").style.display = "none";
  document.getElementById("tabs").style.display = "none";
  hideMessage();

  document.getElementById("dashTitle").textContent =
    "Welcome, " + currentUser.username + "!";
  document.getElementById("dashRole").textContent =
    "Role: " + currentUser.role.toUpperCase();
  document.getElementById("dashboard").style.display = "block";

  var adminPanel = document.getElementById("adminPanel");
  if (currentUser.role === "admin") {
    adminPanel.style.display = "block";
    var list = document.getElementById("userList");
    list.innerHTML = "";
    currentUser.getUsers(registeredUsers).forEach(function (u) {
      var li = document.createElement("li");
      li.textContent = u.username + " — " + u.role.toUpperCase();
      list.appendChild(li);
    });
  } else {
    adminPanel.style.display = "none";
  }
}

function showMessage(msg, type) {
  var el = document.getElementById("message");
  el.textContent = msg;
  el.className = type;
  el.style.display = "block";
}

function hideMessage() {
  document.getElementById("message").style.display = "none";
}
