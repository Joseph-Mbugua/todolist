function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerText = taskText;

  listItem.onclick = function () {
    this.classList.toggle("completed");
  };

  const deleteButton = document.createElement("span");
  deleteButton.innerText = "X";
  deleteButton.className = "delete";
  deleteButton.onclick = function (event) {
    const listItem = event.target.parentElement;
    listItem.remove();
  };

  listItem.appendChild(deleteButton);

  const taskList = document.getElementById("task-list");
  taskList.appendChild(listItem);

  taskInput.value = "";
}
