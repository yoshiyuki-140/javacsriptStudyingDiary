
let colors = ["red", "blue", "green", "yellow", "purple"]

let index = 0;

function insert() {
    let parent = document.getElementById("mylist");
    let item = document.createElement("li");


    item.textContent = colors[index];
    item.style.color = colors[index];

    index = ++index % colors.length;
    parent.appendChild(item);
}