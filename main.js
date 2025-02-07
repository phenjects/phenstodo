// NOTE: if the code looks ugly, blame prettier.

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
  const deleteBtn = document.createElement("button");

  // INFO: setup before appending.
  task.value = taskInputField.value;
  taskCheckbox.type = "checkbox";
  fieldset.setAttribute("id", `fieldset${taskTags.length}ID`);
  fieldset.setAttribute(
    "style",
    "margin-top: 5px; border-radius: 7px; display: flex; flex-direction: row;"
  );
  task.setAttribute(
    "style",
    `border: none; background-color: black; color: white;`
  );

  // INFO: pushes values to arrays.
  taskTags.push(fieldset);
  taskLabels.push(taskInputField.value);

  // INFO: makes it so that you aren't able to just make a task with an empty label.
  if (taskInputField.value == "") {
    window.alert("Please enter a valid task name.");
  } else {
    // INFO: appends creation variables.
    document.getElementById("tasksDIV").appendChild(fieldset);
    document
      .getElementById(`fieldset${taskTags.length}ID`)
      .appendChild(taskCheckbox);
    document.getElementById(`fieldset${taskTags.length}ID`).appendChild(task);
    document
      .getElementById(`fieldset${taskTags.length}ID`)
      .appendChild(lineBreak);
  }
  // INFO: deletes task when the delete button is clicked.
  taskTags.forEach((eachTask) => {
    deleteBtn.onclick = function () {
      eachTask.remove();
    };
  });

  // INFO: when a task is hovered over, it adds a delete button.
  fieldset.addEventListener("mouseenter", function () {
    // INFO: sets up attributes of delete button.
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("style", "background-color: black; color: white;");

    // INFO: appends delete button.
    fieldset.appendChild(deleteBtn);
  });

  // INFO: when the mouse leaves the task area, it removes the delete button.
  fieldset.addEventListener("mouseleave", function () {
    deleteBtn.remove();
  });
}
