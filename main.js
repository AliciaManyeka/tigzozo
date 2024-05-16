const menu = document.querySelector('.hamburger')
const menuOne = document.querySelector('.navbar')

menu.addEventListener('click', function(){
    menuOne.classList.toggle('alicia')
    menu.classList.toggle('active-lines')
})
const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    bodyEl.style.color="white";
  } else {
    bodyEl.style.background = "white";
    bodyEl.style.color="black";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}


inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    bodyEl.style.color="white";
  } else {
    bodyEl.style.background = "white";
    bodyEl.style.color="black";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
