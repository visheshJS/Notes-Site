const notesContainer =document.querySelector(".notes-container");
const createBtn =document.querySelector(".btn");
// const deleteBtn =document.querySelector(".DELETE");

let notes =document.querySelectorAll(".input-box");

function createNote(){
    let inputbox =document.createElement("p");
    let deleteBtn =document.createElement("button");

    inputbox.classList.add("input-box");
    inputbox.setAttribute("contenteditable", "true");
    inputbox.innerHTML="write your content here";

    deleteBtn.classList.add("DELETE");
    deleteBtn.innerHTML='<img src="images/delete.png" alt="delete">';
    notesContainer.appendChild(inputbox);
    inputbox.appendChild(deleteBtn);
    saveData();

    deleteBtn.addEventListener("click",() => {
        notesContainer.removeChild(inputbox);
        saveData();
    
    
      
    });
}
function saveData(){
    
}


