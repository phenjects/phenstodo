const createTask = document.getElementById("newtaskID");
const taskInputField = document.getElementById("inputfieldID");

createTask.addEventListener("click", function () {
  const taskCreate = document.createElement("button");
  taskCreate.innerHTML = taskInputField.value;
  document.getElementById("tasksID").appendChild(taskCreate);
});
