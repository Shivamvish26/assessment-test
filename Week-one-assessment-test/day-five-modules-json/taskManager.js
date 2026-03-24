function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  var data = localStorage.getItem("tasks");
  tasks = data ? JSON.parse(data) : [];
}

function addTask(title) {
  var task = new Task(tasks.length + 1, title);
  tasks.push(task);
  saveTasks();
}

function completeTask(id) {
  var task = tasks.find(function (t) {
    return t.id === id;
  });
  if (task) {
    task.done = true;
    saveTasks();
    showTasks();
  }
}

function getTasks() {
  return tasks;
}
