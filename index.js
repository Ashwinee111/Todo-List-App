let inputBox = document.querySelector(".input-box");
let btn = document.querySelector(".btn");
let listItem = document.querySelector(".list-item");

btn.addEventListener("click", () => {
  if (inputBox.value.trim() === "") {
    alert("Please Enter Your Todo");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listItem.appendChild(list);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    list.appendChild(span);
  }
  inputBox.value = "";
  savedata();
});

listItem.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("chaked");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("save", listItem.innerHTML);
}
function showdata() {
  listItem.innerHTML = localStorage.getItem("save");
}
showdata();
