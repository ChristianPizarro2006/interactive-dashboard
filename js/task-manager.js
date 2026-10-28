// Get the task list container
const taskListContainer = document.getElementById("task-list");

// Create a new unordered list
const taskList = document.createElement("ul");
taskList.id = "user-tasks";

// Add the list to the task-list container
taskListContainer.appendChild(taskList);

// Create an array to store task objects
let myTasks = [];

// Track unique task IDs
let nextTaskId = 1;

// Get the task form elements
const taskInput = document.getElementById("task-name");
const taskPriority = document.getElementById("task-priority");
const taskImportant = document.getElementById("task-important");
const addTaskButton = document.getElementById("add-task");
const deleteListButton = document.getElementById("delete-list");
const taskForm = document.getElementById("task-form");

// Log the entire task array
function logTasks() {
    console.log(JSON.stringify(myTasks));
}

// Display tasks dynamically
function displayTasks() {

    // Clear the existing list
    taskList.replaceChildren();

    myTasks.forEach(function (task) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Create the task text
        const taskText = document.createElement("span");

        taskText.textContent =
            task.name + " - Priority: " + task.priority;

        // Apply priority styling
        if (task.priority === "High") {
            taskText.style.fontWeight = "bold";
        } else if (task.priority === "Medium") {
            taskText.style.fontWeight = "500";
        } else {
            taskText.style.fontWeight = "normal";
        }

        // Highlight important tasks in red
        if (task.isImportant) {
            taskText.style.color = "red";
        }

        // Apply strikethrough to completed tasks
        if (task.isCompleted) {
            taskText.style.textDecoration = "line-through";
        }

        // Create a checkbox to mark tasks complete
        const completeCheckbox = document.createElement("input");

        completeCheckbox.type = "checkbox";
        completeCheckbox.checked = task.isCompleted;

        completeCheckbox.setAttribute(
            "aria-label",
            "Mark " + task.name + " as complete"
        );

        completeCheckbox.addEventListener("change", function () {
            markTaskComplete(task.id);
        });

        // Create a button to delete individual tasks
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function () {
            deleteTask(task.id);
        });

        // Add elements to the list item
        listItem.appendChild(completeCheckbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        // Add the item to the task list
        taskList.appendChild(listItem);
    });
}

// Add a new task
function addTask() {

    // Capture the task name
    const taskName = taskInput.value.trim();

    // Prevent empty tasks
    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    // Create a task object
    const newTask = {
        id: nextTaskId++,
        name: taskName,
        priority: taskPriority.value,
        isImportant: taskImportant.checked,
        isCompleted: false
    };

    // Add the task object to the array
    myTasks.push(newTask);

    // Update the displayed list
    displayTasks();

    // Log the updated task array
    logTasks();

    // Clear the form
    taskForm.reset();

    // Return focus to the task input
    taskInput.focus();
}

// Mark a task complete or incomplete
function markTaskComplete(taskId) {

    const task = myTasks.find(function (item) {
        return item.id === taskId;
    });

    if (task) {
        task.isCompleted = !task.isCompleted;

        displayTasks();
        logTasks();
    }
}

// Delete an individual task
function deleteTask(taskId) {

    myTasks = myTasks.filter(function (task) {
        return task.id !== taskId;
    });

    displayTasks();
    logTasks();
}

// Delete the entire task list
function deleteTaskList() {

    myTasks = [];

    displayTasks();
    logTasks();
}

// Prevent the form from refreshing the page
taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Add the task when the form is submitted
    addTask();
});

// Delete all tasks when the Delete List button is clicked
deleteListButton.addEventListener("click", deleteTaskList);

// Display the initial task list
displayTasks();