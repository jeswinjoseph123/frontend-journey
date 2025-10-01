const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const newTask = document.createElement("li");
  newTask.innerText = input.value;

  const dltBtn = document.createElement("button");
  dltBtn.innerText = "❌";
  dltBtn.classList.add("deleteBtn");

  newTask.appendChild(dltBtn);
  todoList.appendChild(newTask);
  input.value = "";

  dltBtn.addEventListener("click", () => {
    newTask.remove();
  });
});
