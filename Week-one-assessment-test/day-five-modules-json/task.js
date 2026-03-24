function Task(id, title) {
  this.id = id;
  this.title = title;
  this.done = false;
}

var tasks = [];

function addTask(title) {
  var id = tasks.length + 1;
  var task = new Task(id, title);
  tasks.push(task);
}

function getTasks() {
  return tasks;
}
