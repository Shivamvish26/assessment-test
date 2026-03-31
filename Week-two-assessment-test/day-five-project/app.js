import { loadTasks, addTask, deleteTask, toggleTask } from "./taskManager.js";

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Load tasks on start
window.onload = async () => {
  //window ek browser ka global object hai
  const tasks = await loadTasks();
  // console.log(tasks);
  //tasks ko array mai store karta hai.
  // loadTasks() function se tasks ko fetch karta hai aur usko render function ko pass karta hai jisse tasks ko display kiya ja sake.
  render(tasks);
};

// Add task on button click
window.addNewTask = async function () {
  //global function banata hai jise HTML ke button ke onclick attribute se call kiya ja sakta hai.
  if (!input.value.trim()) return;
  //trim => empty spaces ko remove karta hai. agar input empty hai to function return kar dega aur aage ka code execute nahi hoga.
  const tasks = await addTask(input.value);
  // addTask() ek naya task create karta hai aur array me add karta hai.
  //aur localstorage me save karta hai. aur updated tasks array ko return karta hai.
  input.value = ""; // input field ko clear kar deta hai.
  render(tasks); //naye task ko display karta hai.
};

// Render tasks
function render(tasks) {
  list.innerHTML = "";
  //list ui ko clear kar deta hai taki naye tasks add karne par purane tasks bhi dikhai de.

  tasks.forEach((task) => {
    //iterating through foreach loop ke through tasks array ke har task par loop chalata hai.
    const li = document.createElement("li"); // har task ke li element create karta hai.

    li.innerHTML = ` 
      ${task.title} 
      [${task.completed ? "Task Completed" : "Task Not Completed"}] 
      <button style="margin-bottom:10px" onclick="completeTask(${task.id})">Toggle</button>
      <button onclick="removeTask(${task.id})">Delete</button>
    `; // template literal ka use karke task title, completion status, toggle button aur delete button ko li element ke andar set karta hai.
    //ternary operator ka use karke task ke completion status ko check karta hai aur uske accordingly check mark ya cross mark display karta hai.
    list.appendChild(li); //appendChild() method se har li element ko ul element ke andar add karta hai taki tasks list me dikhai de.
  });
}

// Toggle
window.completeTask = async function (id) {
  const tasks = await toggleTask(id);  //task manager ko find kar kai task to true or fasle mai karta hai
  render(tasks); //task =>updated tasks ko render karta hai taki UI update ho jaye.
};

// Delete
window.removeTask = async function (id) {
  const tasks = await deleteTask(id);
  render(tasks);
};

