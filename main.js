// NOTE: if the code looks ugly, blame prettier.

const taskInputField = document.getElementById("inputfieldID");
const taskTags = [];

function addNewTask() {
  const fieldset = document.createElement("fieldset");
  const taskCheckbox = document.createElement("input");
  const task = document.createElement("input");
  const lineBreak = document.createElement("br");
  const deleteBtn = document.createElement("button");

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

  taskTags.push(fieldset);
  taskLabels.push(taskInputField.value);

  if (taskInputField.value == "") {
    window.alert("Please enter a valid task name.");
  } else {
    document.getElementById("tasksDIV").appendChild(fieldset);
    document
      .getElementById(`fieldset${taskTags.length}ID`)
      .appendChild(taskCheckbox);
    document.getElementById(`fieldset${taskTags.length}ID`).appendChild(task);
    document
      .getElementById(`fieldset${taskTags.length}ID`)
      .appendChild(lineBreak);
  }
  taskTags.forEach((eachTask) => {
    deleteBtn.onclick = function () {
      eachTask.remove();
    };
  });

  fieldset.addEventListener("mouseenter", function () {
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("style", "background-color: black; color: white;");
    fieldset.appendChild(deleteBtn);
  });

  fieldset.addEventListener("mouseleave", function () {
    deleteBtn.remove();
  });
}
