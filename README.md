**In this code, the `todos` array stores all the user's tasks.**
**Whenever a task is added, edited, or deleted, the `saveTodos()` function is called**
**which saves the tasks in local storage using `localStorage.setItem("todos", JSON.stringify(todos));`**

**To load the tasks from storage when the page is loaded, the `loadTodos()` function is called**
**which retrieves the tasks from local storage using localStorage.getItem("todos"), and then parses the JSON string using JSON.parse() to get the array of tasks.**

# Usage
## To add a new task to your to-do list:

### 1-Type your task into the input box under "Add a new task"

### 2-Press "Enter" on your keyboard, or click the "Add" button

## To edit an existing task in your to-do list:

### 1-Click the "Edit" button next to the task you want to edit

### 2-Type your new task description into the prompt that appears

### 3-Press "OK" to save the changes, or "Cancel" to discard the changes

## To mark a task as completed:

### 1-Check the checkbox to the left of the task

### 2-The task will be crossed out and moved to the bottom of the list

## To delete a task from your to-do list:

### 1-Click the "Delete" button next to the task you want to delete

### 2-The task will be removed from the list

# Codepen :
https://codepen.io/Mo61n/pen/rNZQgwV
