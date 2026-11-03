
function updateClock() {
    // Get the current date and time
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    const session = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Format the time and date
    const currentTime =
        hours + ":" + minutes + ":" + seconds + " " + session;

    const currentDate = now.toLocaleDateString();

    // Update the dashboard
    document.getElementById("clock-face").innerHTML = currentTime;
    document.getElementById("calendar-date").innerHTML = currentDate;
}

// Run immediately, then update every second
updateClock();
setInterval(updateClock, 1000);
