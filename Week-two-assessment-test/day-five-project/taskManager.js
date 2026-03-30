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
// export async function addTask(title) {
//   const newTask = createTask(Date.now(), title);  //yaha pai ek new task object create hua hai
//   tasks.push(newTask);  //array mai add karta hai isko
//   await saveTasks();//ye localStorage mai save karne ke liye hai
//   return tasks; //yaha pai updated tasks array return kar raha hai jisme naya task add hua hai
// }

let currentId = 1; // starting ID

export async function addTask(title) {
  const newTask = createTask(currentId, title);
  currentId++;
  tasks.push(newTask);
  await saveTasks();

  return tasks;
}

// Delete task
export async function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  await saveTasks();
  return tasks;
}

// Toggle complete
export async function toggleTask(id) {
  //ye function task ke completed status ko toggle karta hai (true se false ya false se true).
  tasks = tasks.map((task) => {
    //ye map function har task ko check karta hai aur agar task ka id match karta hai to uska completed status ko toggle kar deta hai.
    if (task.id === id) {
      //agar task ka id match karta hai to uska completed status ko toggle kar deta hai (true se false ya false se true).
      return { ...task, completed: !task.completed }; //ye spread operator ka use karke task object ko copy karta hai aur uska completed status ko toggle kar deta hai.
    }
    return task; //agar task ka id match nahi karta hai to usko waise hi return kar deta hai. yani ki uska status change nahi hota hai.
  });

  await saveTasks(); //ye localStorage mai save karne ke liye hai
  return tasks; //yaha pai updated tasks array return kar raha hai jisme toggled task ka status change hua hai.
}
