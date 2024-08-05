const notesContainer = document.querySelector(".notes-cont");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

document.addEventListener("keydown", event =>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="download (4).png ";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=="IMG")
    {
        e.target.parentElement.remove();

    }
})