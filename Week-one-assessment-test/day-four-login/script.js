//  User Constructor
function User(username, password) { //user object ko create kiye hai
  this.username = username; //this-> is an current object/ user name ko store kiye hai
  this.password = password;
  this.role = "user"; // default role set hai user
  this.isLoggedIn = false; //login status initially false hai
}

// users methods
User.prototype.login = function (password) { //login method ready kiye hai, prototype use kar kai data save kiye hai
  if (this.password === password) { //entered password check kiye hai
    this.isLoggedIn = true; //agar password sahi hai to usko login kar do nahi to error show kar do
    return true;
  }
  return false;
};

User.prototype.logout = function () { //logout method
  this.isLoggedIn = false;
};

//Admin Constructor — inherits from User
function Admin(username, password) {
  User.call(this, username, password); // inherit User properties, yaha pai user constructor call ho raha hai
  // admin mai username, password, islogged in copy ho raha hai
  this.role = "admin";
}

// prototype inheritance
Admin.prototype = Object.create(User.prototype);
// admin inherits user methods
Admin.prototype.constructor = Admin; //reference ko fix kiye hai

Admin.prototype.getUsers = function (allUsers) {//admin can view all users
  return allUsers;
};

// global variables
var registeredUsers = []; //array to store all users json data mai
var currentUser = null; //ya pe currently logged-in user store karaga

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
