

function c2f(celsius = document.getElementById("cels")) {
    let fahrenheit = (celsius - 32) * 5 / 9;
    document.getElementById("fahr").textContent = fahrenheit.toString(10);
}
