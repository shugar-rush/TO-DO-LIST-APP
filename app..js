const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

//adding click function to the button [in HTML onclick="addTask()"]
function addTask() {
  if (inputBox.value === '') {
    alert("You must write something"); //so this happen when click button and dont have any task in the field
  }
  else {
    //create a new li element
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function (e) {
  //The code inside this event listener will be executed whenever there is a click on an item within
  //the list container. If the clicked item was a span, remove it from its parent li
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
