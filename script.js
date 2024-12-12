const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("content" || "");
}
showNotes();

function updateStorage() {
  localStorage.setItem("content", notesContainer.innerHTML);
}

function createNote() {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  //   let deleteBtn = document.createElement("button");

  inputbox.classList.add("input-box");
  inputbox.setAttribute("contenteditable", "true");
  //   inputbox.innerHTML = "write your content here";
  img.src = "images/delete.png";

  //   deleteBtn.classList.add("DELETE");
  //   deleteBtn.innerHTML = '<img src="images/delete.png" alt="delete">';
  notesContainer.appendChild(inputbox).appendChild(img);

  inputbox.addEventListener("keyup", updateStorage);

  
}
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      updateStorage();

    }

});
