let signs = ["○", "✖", ""];
let index = 0;

function init() {
    let b = document.getElementById("board");
    const width_height = 3;
    for (let y = 0; y < width_height; y++) {
        let tr = document.createElement('tr');
        for (let x = 0; x < width_height; x++) {
            let td = document.createElement('td');
            td.className = "cell";
            td.id = `${td.className}${x}${y})`;
            td.onclick = reverse;
            tr.appendChild(td);
        }
        b.appendChild(tr);
    }
}
function reverse(e) {
    index = index % signs.length;
    index += 1;
    console.log(index);
    document.getElementById(e.target.id).textContent = signs[index];
}

function reset() {
    let b = document.getElementById('board');
}
