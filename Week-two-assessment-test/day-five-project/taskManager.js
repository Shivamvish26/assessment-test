import { createTask } from "./task.js";

let tasks = [];

// Load from localStorage
export async function loadTasks() {
  const data = localStorage.getItem("tasks");
  tasks = data ? JSON.parse(data) : [];
  return tasks;
}

// Save tasks
async function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
export async function addTask(title) {
  const newTask = createTask(Date.now(), title);  //date.now ek unique id generate karta hai
  tasks.push(newTask);  //array mai add karta hai isko
  await saveTasks();
  return tasks;
}

// Delete task
export async function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  await saveTasks();
  return tasks;
}

// Toggle complete
export async function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  await saveTasks();
  return tasks;
}