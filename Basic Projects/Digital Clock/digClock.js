const clock = () => {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    const meridium = hours >= 12 ? "PM" : "AM"; //if hours greater than or eual to 12 then pm otherwise am
    hours = hours % 12 || 12;
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    const time = `${hours}:${minutes}:${seconds}:${meridium}`;
    document.getElementById("clock").textContent = time;
}

clock();
setInterval(clock, 1000);