// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(parametruPizdii) {
  // prevent form from submiting
  parametruPizdii.preventDefault();

  // Creating Todo Div and add a class
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Creating LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Complete Button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("complete-button");
  todoDiv.appendChild(checkButton);

  //Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  //append the div to the list(UL)
  todoList.appendChild(todoDiv);

  //Clear todo input value
  todoInput.value = "";
}

function deleteCheck(parametruMasii) {
  const item = parametruMasii.target;
  //Delete
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
