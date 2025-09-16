const todoInput = document.getElementById("todoInput");

todoInput.addEventListener("input", (e) => {
  e.target.style.height = "auto"; // reset height first
  e.target.style.height = e.target.scrollHeight + "px"; // set new height
});
