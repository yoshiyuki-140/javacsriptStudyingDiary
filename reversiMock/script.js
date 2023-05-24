
function init() {
    let b = document.getElementById("board");
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");
            td.className = "cell";
            td.id = "cell" + i + j;
            td.onclick = clicked;
            tr.appendChild(td);
        }
        b.appendChild(tr);
    }
}

function clicked(e) {
    document.getElementById("info").textContent = e.target.id + "clicked";
}