import { loadTasks, addTask, deleteTask, toggleTask } from "./taskManager.js";

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Load tasks on start
window.onload = async () => {
  const tasks = await loadTasks();
  render(tasks);
};

// Add task
window.addNewTask = async function () {
  if (!input.value.trim()) return;

  const tasks = await addTask(input.value);
  input.value = "";
  render(tasks);
};

// Render tasks
function render(tasks) {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task.title} 
      [${task.completed ? "✔️" : "❌"}]
      <button onclick="completeTask(${task.id})">Toggle</button>
      <button onclick="removeTask(${task.id})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// Toggle
window.completeTask = async function (id) {
  const tasks = await toggleTask(id);
  render(tasks);
};

// Delete
window.removeTask = async function (id) {
  const tasks = await deleteTask(id);
  render(tasks);
};