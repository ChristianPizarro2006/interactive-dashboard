// Calculates the user's weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output =
        userName + ", your weekly task goal is " +
        weeklyGoal +
        " tasks. With " +
        bonusTasks +
        " bonus tasks, your total goal is " +
        totalGoal +
        " tasks.";

    document.getElementById("goal-message").innerHTML = output;
}


// Runs when the Calculate Goal button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event) {

    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});