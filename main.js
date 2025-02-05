
// INFO: functionality variables.
const taskInputField = document.getElementById("inputfieldID");
const taskTags = [];

// INFO: onclick function.
function addNewTask() {

  // INFO: creation variables.
  const fieldset = document.createElement("fieldset");
  const taskCheckbox = document.createElement("input");
  const task = document.createElement("input");
  const lineBreak = document.createElement("br");
  
  // INFO: setup before appending.
  task.value = taskInputField.value;
  taskCheckbox.type = "checkbox";
  fieldset.setAttribute("id", `fieldset${taskTags.length}ID`);
  fieldset.setAttribute("style", "margin-top: 5px;");
  task.setAttribute("style", `border: none; background-color: black; color: white;`);
  task.setAttribute("id", `task${taskTags.length}ID`);

  // INFO: appends creation variables
  document.getElementById("tasksDIV").appendChild(fieldset);
  document.getElementById(`fieldset${taskTags.length}ID`).appendChild(taskCheckbox);
  document.getElementById(`fieldset${taskTags.length}ID`).appendChild(task);
  document.getElementById(`fieldset${taskTags.length}ID`).appendChild(lineBreak);

  // INFO: pushes task IDs to tasks array.
  taskTags.push(document.getElementById(`task${taskTags.length}ID`));

};
