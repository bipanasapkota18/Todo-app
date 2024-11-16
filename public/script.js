let inputs = document.getElementById("inp");
let taskList = document.getElementById("taskList");
let tasks = [];
function Add() {
  let inputValue = inputs.value.trim();

  if (inputValue === "") {
    alert("Enter a task");
  } else {
    tasks.push(inputValue);
    renderTasks();
    inputs.value = "";
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = task;

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    deleteIcon.addEventListener("click", () => removeTask(index));

    listItem.appendChild(deleteIcon);
    taskList.appendChild(listItem);
  });
}

document.getElementById("addButton").addEventListener("click", addTask);
