const todoInput = document.getElementById("todoInput");
const saveBtn = document.getElementById("add-btn");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

todoInput.addEventListener("input", (e) => {
  e.target.style.height = "auto"; // reset height first
  e.target.style.height = e.target.scrollHeight + "px"; // set new height
});

saveBtn.addEventListener("click", () => {
  addTodo();
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodo();
  }
});

function addTodo() {
  const todo = todoInput.value.trim();
  if (todo !== "") {
    todos.push({
      text: todo,
      completed: false,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
  }
  loadTodo();
}

function loadTodo() {
  let todohtml = "";

  todos.forEach((todo, index) => {
    todohtml += ` <div id="todoContainer">
        <div id="todoText" onclick="console.log('clicked'); toggleCompleted(${index})">
        <p  class="${todo.completed ? "completed" : ""}">${todo.text}</p>
        </div>
        <div id="deleteBtn" onclick="deleteTodo(${index})">
          <p>X</p>
        </div></div>`;
  });
  document.getElementById("list-container").innerHTML = todohtml;
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  localStorage.setItem("todos", JSON.stringify(todos));
  loadTodo();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  loadTodo();
}

loadTodo();
