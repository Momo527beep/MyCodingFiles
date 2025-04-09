const heading = document.getElementById("title");
const colorset = document.getElementById("colors");
const button = document.getElementById("savebtn");


localStorage.getItem("selectedColor");

button.addEventListener("click", () => {
    const selectedColor = colorset.value;

    if(selectedColor) {
        localStorage.setItem("favColor", selectedColor);
        document.body.style.backgroundColor = selectedColor;
        heading.textContent = `So your favourite color is ${selectedColor}... That's an ugly choice`;
    } else {
        heading.textContent = "Please choose a color before saving!";
    }
});


//EASY PEASY

//You DON'T NEED to write if statement here. it was only for the 'else' statement here.