const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const totalTasksEl = document.getElementById("totalTasks");
const completedTasksEl = document.getElementById("completedTasks");

let totalTasks = 0;
let completedTasks = 0;

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  // Create task elements
  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
      completedTasks++;
    } else {
      li.classList.remove("completed");
      completedTasks--;
    }
    updateSummary();
  });

  const span = document.createElement("span");
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "❌";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => {
    if (checkbox.checked) completedTasks--;
    todoList.removeChild(li);
    totalTasks--;
    updateSummary();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);
  todoList.appendChild(li);

  totalTasks++;
  updateSummary();
  todoInput.value = "";
}

function updateSummary() {
  totalTasksEl.textContent = `Total Tasks: ${totalTasks}`;
  completedTasksEl.textContent = `Completed Tasks: ${completedTasks}`;
}
