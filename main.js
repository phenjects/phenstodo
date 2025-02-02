const createTask = document.getElementById("newtaskID");
const taskInputField = document.getElementById("inputfieldID");

createTask.addEventListener("click", function () {
  const taskCreate = document.createElement("button");
  const lineBreak = document.createElement("br")
  taskCreate.innerHTML = taskInputField.value;
  taskCreate.setAttribute("style", "border: none; background-color: black; color: white;")
  document.getElementById("tasksID").appendChild(taskCreate);
  document.getElementById("tasksID").appendChild(lineBreak)
});
