const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const newTask = document.createElement("li");
  if (input.value.trim() === "") {
    window.alert("Please enter a Text");
    return;
  } else {
    newTask.innerText = input.value;
  }

  const dltBtn = document.createElement("button");
  dltBtn.innerText = "❌";
  dltBtn.classList.add("deleteBtn");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("doneCheckbox");

  newTask.appendChild(checkBox);
  newTask.appendChild(dltBtn);
  todoList.appendChild(newTask);
  input.value = "";

  checkBox.addEventListener("change", () => {
    newTask.classList.toggle("line-through", checkBox.checked);
    newTask.classList.toggle("text-gray-400", checkBox.checked);
    newTask.classList.toggle("done", checkBox.checked);
  });

  dltBtn.addEventListener("click", () => {
    newTask.remove();
  });
});
