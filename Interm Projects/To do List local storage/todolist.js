const inputfield = document.getElementById("userinput");
const displaybtn = document.getElementById("btn");
const displayArea = document.getElementById("display");

const createTaskElement = () => {
    let para = document.createElement("p");
    para.innerText = inputfield.value;
    displayArea.appendChild(para);

    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through";
    });

    para.addEventListener("dblclick", () => {
        displayArea.removeChild(para);
        saveTasks();
    });
};

let loadTasks = JSON.parse(localStorage.getItem('tasks')) || [];
loadTasks.forEach(ptags => createTaskElement(ptags));

const saveTasks = () => {
    let lists = [];
    document.querySelectorAll("#display p").forEach(para => lists.push(para.textContent));
    localStorage.setItem('tasks', JSON.stringify(lists));
}

displaybtn.addEventListener("click", () => {
    if (inputfield.value === "") {
        return; // Prevent empty input
    }
    createTaskElement(inputfield.value); //createTaskElement was a function which we are calling it here. 
    saveTasks();
    
    inputfield.value = ""; // Clear input field
});


// const inputfield = document.getElementById("userinput");
// const displaybtn = document.getElementById("btn");
// const displayArea =document.getElementById("display");

// let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// savedTasks.forEach(task => {
//     let para = document.createElement("p");
//     para.innerText = task;
//     displayArea.appendChild(para);

//     para.addEventListener("click", () => {
//         para.style.textDecoration = "line-through";
//     });

//     para.addEventListener("dblclick", () => {
//         displayArea.removeChild(para);
//         saveTasks();
//     });
// });


// // Save tasks
// const saveTasks = () => {
//     let tasks = [];
//     document.querySelectorAll("#display p").forEach(para => tasks.push(para.innerText.trim()));
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };


// displaybtn.addEventListener("click", () => {
//     let para = document.createElement("p");
//     para.innerText = inputfield.value;
//     displayArea.appendChild(para);

//     inputfield.value = "";

//     para.addEventListener("click", () => {
//         para.style.textDecoration = "line-through"
//     });

//     para.addEventListener("dblclick", () => {
//         displayArea.removeChild(para);
//         saveTasks();
//     });
//     saveTasks();
// })


