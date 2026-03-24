function handleAdd() {
  var input = document.getElementById("taskInput");
  var title = input.value.trim();

  if (!title) return;

  addTask(title);
  input.value = "";
  showTasks();
}

function showTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";

  getTasks().forEach(function (t) {
    var li = document.createElement("li");
    li.innerText = t.title + " - " + (t.done ? "Completed" : "Pending");
    list.appendChild(li);
  });
}

loadTasks();
showTasks();
