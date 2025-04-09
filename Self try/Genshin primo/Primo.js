const primosfield = document.getElementById("primo");
const fatesfield = document.getElementById("fate");
const calcbtn = document.getElementById("btn");
const result = document.getElementById("output");


calcbtn.addEventListener("click", () => {
    let primosaver = Number(primosfield.value); 
    let fatessaver = Number(fatesfield.value);

    let pcounter = Math.floor(primosaver / 160);
    result.value = pcounter + fatessaver + ' fates';
});
