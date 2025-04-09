const moodlists = document.getElementById("moodlists");
const button = document.getElementById("btn");
const moodHistory = document.getElementById("moodDisplay");


// let moods = [];

const moods = JSON.parse(localStorage.getItem("moodLogs")) || [];

button.addEventListener("click", () => {
    const moodSelect = moodlists.value;

    if(moodSelect !== "") {
        const moodEntry = {                        //this is an OBJECT
            mood: moodSelect,                     //clear ALTERNATIVE is written in notebook
            date: new Date().toLocaleString()
        }

        moods.push(moodEntry);
        localStorage.setItem("moodLogs", JSON.stringify(moods));
        showMoods();
    }
});

const showMoods = () => {
    moodHistory.textContent = ""; //clear the list first

    moods.forEach((entry) => {  //Entry - A nickname for, each object inside the moods array
        const p = document.createElement("p");
        p.textContent = `${entry.date} - ${entry.mood}`; //date - mood. its not a minus sign its a dash
        moodHistory.appendChild(p);
    });
}

showMoods();

//Also we are using forEach cuz its clean, simple way to loop through an array in JavaScript