async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json(); //Response ko JSON → JavaScript object me convert karta hai
    console.log(data);

    setTimeout(() => {
      displayUsers(data);
    }, 2000);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayUsers(users) {
  var list = document.getElementById("userList"); //HTML ka <ul> ya <div> select kar rahe ho
  list.innerHTML = ""; //removing the old list and avoiding the duplicate 

  users.forEach(function (user) {  //looping for each array
    var li = document.createElement("li"); //yaha pai new li create ho raha hai
    li.textContent = user.name + " - " + user.email;
    list.appendChild(li);
  });
}
