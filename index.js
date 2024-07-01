const timeEl = document.querySelector("[data-testid='currentTimeUTC']");
const dayEl = document.querySelector("[data-testid='currentDay']");

function getCurrentTime() {
    const currentDate = new Date().toUTCString();
    const time = currentDate.split(" ")[4];
    const timeInHours = time.split(":")[0];
    const timeInMinutes = time.split(":")[1];
    const meridian = timeInHours >= 12 ? "pm" : "am";
    const currentTime = `${timeInHours}:${timeInMinutes}${meridian}`;
    return currentTime;
}

function getCurrentDayOfWeek() {
    const options = { weekday: "long" };
    const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
    );
    return dayOfWeek;
}

function updateTimeAndDay() {
    const time = getCurrentTime();
    const day = getCurrentDayOfWeek();
    timeEl.textContent = time;
    dayEl.textContent = day;
}

updateTimeAndDay();

setInterval(updateTimeAndDay, 60000);
