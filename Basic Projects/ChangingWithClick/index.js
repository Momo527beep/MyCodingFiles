const click = document.getElementById("click");
const click2 = document.getElementById("click2");
const para = document.getElementsByTagName("p")[0]; //since tagsname return an html collection and whether there are multiple p's or not we still need to specify the index

click.addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
});

//see, ive not wrote getelementby.. thingy for body. For built in html property like body, head etc u can just write document.theHTMLproperty 

click2.addEventListener("click", () => {
    para.textContent = "Easy! Isn't it?";
})