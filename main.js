const addRow = document.getElementById('addRow');
const removeRow = document.getElementById('removeRow');
const addColumn = document.getElementById('addColumn');
const removeColumn = document.getElementById('removeColumn');
const fillAllUncolored = document.getElementById('fillAllUncolored');
const fillAll = document.getElementById('fillAll');
const clearAll = document.getElementById('clearAll');
const table = document.getElementById("table").firstElementChild;
const colors = document.getElementById('colorSelector');

let rows = document.getElementsByClassName('row').length;
let cols = document.getElementsByClassName('cell').length/rows;
//let cells = document.getElementsByClassName('cell');

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
    tableCellFill();
    //cells = document.getElementsByClassName('cell');
});

removeRow.addEventListener('click', (event) => {
    table.removeChild(table.lastElementChild);
    //cells = document.getElementsByClassName('cell');
    rows--;
    tableCellFill();
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
    tableCellFill();
    //cells = document.getElementsByClassName('cell');
});

removeColumn.addEventListener('click', (event) => {
    cols--;
    let tr = Array.from(document.getElementsByClassName("row"));
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
    tableCellFill();
    //cells = document.getElementsByClassName('cell');
});

function tableCellFill(){
    let row = document.getElementsByClassName('row');
    let rlen = row.length;
    for(let i = 0; i < rlen; i++){
        let cells = row[i].children;
        for(let j = 0; j < cells.length; j++){
            cells[j].addEventListener('click', (event) =>{
                cells[j].style.backgroundColor = colors.value;
            });
        }
    }
}
tableCellFill();

fillAllUncolored.addEventListener('click', (event) => {
    let row = document.getElementsByClassName('row');
    let rlen = row.length;
    for(let i = 0; i < rlen; i++){
        let cells = row[i].children;
        for(let j = 0; j < cells.length; j++){
            if(cells[j].style.backgroundColor === '') 
                cells[j].style.backgroundColor = colors.value;
        }
    }
});

