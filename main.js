const addRow = document.getElementById('addRow');
const removeRow = document.getElementById('removeRow');
const addColumn = document.getElementById('addColumn');
const removeColumn = document.getElementById('removeColumn');
const fillAllUncolored = document.getElementById('fillAllUncolored');
const fillAll = document.getElementById('fillAll');
const clearAll = document.getElementById('clearAll');
const table = document.getElementById("table").firstElementChild;

let rows = document.getElementsByClassName('row').length;
let cols = document.getElementsByClassName('cell').length/rows;

addRow.addEventListener('click', (event) => {
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    rows++;
    for(let i = 0; i < cols; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
});

removeRow.addEventListener('click', (event) => {
    table.removeChild(table.lastElementChild);
    rows--;
});

addColumn.addEventListener('click', (event) => {

    cols++;
    let row = document.getElementsByClassName('row');
    let tr = Array.from(row);
    for(let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        tr[i].appendChild(cell);
    }
});

removeColumn.addEventListener('click', (event) => {
    cols--;
    let tr = Array.from(document.getElementsByClassName("row"));
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
});
