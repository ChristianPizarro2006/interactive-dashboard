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

// Get the task form and task input
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-name");

// Run when the task form is submitted
taskForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the task entered by the user
    const task = taskInput.value.trim();

    // Make sure the task is not empty
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