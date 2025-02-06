// NOTE: simply inspiration and for the purpose of learning, totally nothing else.

// INFO: functionality variables.
const taskInputField = document.getElementById("inputfieldID"); // Fixed typo: inputFieldID -> inputfieldID

// INFO: onclick function.
function addNewTask() {

    // INFO: creation variables.
    const fieldset = document.createElement("fieldset");
    const taskCheckbox = document.createElement("input");
    const taskBtn = document.createElement("input");
    const lineBreak = document.createElement("br");

    // INFO: setup before appending.
    taskBtn.value = taskInputField.value;
    taskCheckbox.type = "checkbox";
    fieldset.setAttribute("style", "margin-top: 5px;");
    taskBtn.setAttribute("style", "border: none; background-color: black; color: white;");

    // INFO: appends creation variables.
    document.getElementById("taskBtnsDIV").appendChild(fieldset);
    fieldset.appendChild(taskCheckbox);
    fieldset.appendChild(taskBtn);
    fieldset.appendChild(lineBreak);

    // INFO: gives buttons after hovering
    taskBtn.addEventListener("mouseover", function () {
      console.log("test");
    });

}