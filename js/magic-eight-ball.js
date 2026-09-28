// Array of possible Magic Eight Ball answers
const answers = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Definitely",
    "I don't think so"
];

// Select the elements from the HTML
const ball = document.getElementById("ball");
const circle = document.getElementById("circle");
const question = document.getElementById("question");
const reset = document.getElementById("reset");

// Function that displays a random Magic Eight Ball answer
function displayAnswer() {
    // Generate a random index
    let index = Math.floor(Math.random() * answers.length);

    // Display the selected answer
    circle.innerHTML = answers[index];

    // Make the answer visible
    circle.style.display = "flex";
}

// When the user presses the mouse down on the Eight Ball
ball.addEventListener("mousedown", function () {
    // Check if the question field is empty
    if (question.value.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    // Hide the answer while the ball shakes
    circle.style.display = "none";
});

// When the user releases the mouse button, show an answer
ball.addEventListener("mouseup", function () {
    // Only display an answer if a question was entered
    if (question.value.trim() !== "") {
        displayAnswer();
    }
});

// Reset the Magic Eight Ball
reset.addEventListener("click", function () {
    circle.style.display = "none";
});