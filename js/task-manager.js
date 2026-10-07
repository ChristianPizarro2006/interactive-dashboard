// Get the task list container
const taskListContainer = document.getElementById("task-list");

// Create a new unordered list
const taskList = document.createElement("ul");

// Assign an ID to the list
taskList.id = "user-tasks";

// Add the list to the task-list container
taskListContainer.appendChild(taskList);

// Create an array to store tasks
let myTasks = [];

// Get the task input, Add Task button, and form
const taskInput = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-task");
const taskForm = document.getElementById("task-form");

// Prevent the form from refreshing the page
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

// Add a task when the Add Task button is clicked
addTaskButton.addEventListener("click", function () {

    // Capture and store the task
    const task = taskInput.value.trim();

    if (task !== "") {

        // Add the task to the array
        myTasks.push(task);

        // Create a new list item
        const listItem = document.createElement("li");

        // Add the task text to the list item
        listItem.textContent = task;

        // Add the list item to the unordered list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
});