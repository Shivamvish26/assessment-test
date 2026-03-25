async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json(); // JSON → object

    displayUsers(data);

  } catch (error) {
    console.log("Error:", error);
  }
}

function displayUsers(users) {
  var list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach(function (user) {
    var li = document.createElement("li");
    li.textContent = user.name + " - " + user.email;
    list.appendChild(li);
  });
}