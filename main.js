const createTask = document.getElementById("newtaskID");
const taskInputField = document.getElementById("inputfieldID");

createTask.onclick = function testFunc() {
  const taskCreate = document.createElement("button");
  const deleteCreate = document.createElement("button");
  const lineBreak = document.createElement("br");
  taskCreate.innerHTML = taskInputField.value;
  taskCreate.setAttribute("style", `border: none; background-color:
                                    black; color: white;`);
  
  deleteCreate.innerHTML = "x"
  deleteCreate.setAttribute("style", `border-style: solid;
                                      background-color: black;
                                      border-color: white;
                                      color: white;
                                      width: auto;
                                      height: auto;
                                      font-size: 15px;
                                      border-radius: 7px;`
                           );
  deleteCreate.setAttribute("id", `deletebtnID`)
  document.getElementById("tasksID").appendChild(taskCreate);
  document.getElementById("tasksID").appendChild(deleteCreate);
  document.getElementById("tasksID").appendChild(lineBreak);
};

