let todos = [];

      const todoList = document.getElementById("todos");

      const addTodoForm = document.getElementById("add-todo-form");

      function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
      }

      function loadTodos() {
        if (localStorage.getItem("todos")) {
          todos = JSON.parse(localStorage.getItem("todos"));
          displayTodos();
        }
      }

      addTodoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newTodoInput = document.getElementById("new-todo");

        if (!newTodoInput.value) {
          const toast = document.createElement("div");
          toast.classList.add("toast");
          toast.innerText = "Please enter a task";
          document.body.appendChild(toast);

          setTimeout(() => {
            toast.classList.add("show");
            setTimeout(() => {
              toast.classList.remove("show");
              setTimeout(() => {
                document.body.removeChild(toast);
              }, 200);
            }, 2000);
          }, 100);

          return;
        }

        todos.push({
          id: todos.length + 1,
          text: newTodoInput.value,
          completed: false,
        });

        saveTodos();

        newTodoInput.value = "";

        displayTodos();
      });

      function displayTodos() {
        todoList.innerHTML = "";

        todos.forEach((todo) => {
          const listItem = document.createElement("li");

          if (todo.completed) {
            listItem.classList.add("completed");
          }

          listItem.innerHTML = `
      <input type="checkbox" id="todo-${todo.id}" onchange="toggleCompleted(${
            todo.id
          })" ${todo.completed ? "checked" : ""}>
      <label for="todo-${todo.id}">${todo.text}</label>
      <button onclick="editTask(event)" data-task-id="${todo.id}">Edit</button>
      <button onclick="deleteTask(event)" data-task-id="${
        todo.id
      }">Delete</button>
    `;
          todoList.appendChild(listItem);
        });
      }

      function editTask(event) {
        event.preventDefault();

        const taskId = event.target.getAttribute("data-task-id");

        const todo = todos.find((todo) => todo.id == taskId);

        const newText = prompt("Edit task", todo.text);

        if (newText === null) {
          return;
        }

        todo.text = newText;

        saveTodos();

        displayTodos();
      }

      function deleteTask(event) {
        event.preventDefault();

        const taskId = event.target.getAttribute("data-task-id");

        todos = todos.filter((todo) => todo.id != taskId);

        saveTodos();

        displayTodos();
      }

      function toggleCompleted(id) {
        const todo = todos.find((todo) => todo.id == id);

        todo.completed = !todo.completed;

        saveTodos();

        displayTodos();
      }

      loadTodos();