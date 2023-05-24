
function init() {
    let b = document.getElementById("board");
    const size = 8;
    for (let i = 0; i < size; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            let td = document.createElement("td");
            td.className = "cell";
            td.id = td.className + i + j;
            td.onclick = clicked;
            tr.appendChild(td);
        }
        b.appendChild(tr);
    }
}

function clicked(e) {
    document.getElementById("info").textContent = e.target.id + "clicked"; 
}