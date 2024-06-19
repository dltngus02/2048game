
const tableData = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];


function createTd(cellData) {
    const td = document.createElement('td');
    
    const div = document.createElement('div');
    div.className = 'grid-cell';
   
    td.appendChild(div);
    return td;
}

// Function to create a row
function createTr(rowData) {
    const tr = document.createElement('tr');
    tr.className = 'grid-row';
    rowData.forEach(cellData => {
        const td = createTd(cellData);
        tr.appendChild(td);
    });
    return tr;
}

// Function to create the table
function createTable(data) {
    const table = document.getElementById('gameTable');
    data.forEach(rowData => {
        const tr = createTr(rowData);
        table.appendChild(tr);
    });
}





// Initialize the table with data
createTable(tableData);