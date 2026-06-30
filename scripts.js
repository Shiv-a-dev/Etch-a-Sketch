const container = document.getElementById("container");
let size = document.getElementById("size");
let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});

let colorPicker = document.getElementById("color");

function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.style.backgroundColor = "white";
            square.classList.add("square");

            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = `${colorPicker.value}`;
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

size.addEventListener("input", () => {
    createGrid(size.value);
});





































