const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(img);
})