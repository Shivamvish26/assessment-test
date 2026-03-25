function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json(); // convert to JS object
    })
    .then(function (data) {
      displayUsers(data);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
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