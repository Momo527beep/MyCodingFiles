document.querySelectorAll(".colorItems").forEach(item => { 
    item.addEventListener("click", () => {
        document.body.style.backgroundColor = item.style.backgroundColor;
    });
});

//forEach loops thorough each element in the nodeLists. so our variable name is automatically assigned to the current element in loop
//forEach assigns/name "item" to each div