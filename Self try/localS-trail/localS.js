let savedItem = localStorage.getItem("username");


document.getElementById("btn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("userName", name);
    document.getElementById("title").textContent = `Welcome ${name}!`
})