const rowInput = document.getElementById("row");
const columnInput = document.getElementById("column");
const tBody = document.getElementById("tableBody");

function updateTable(rows, columns) {
  rows = Number(rowInput.value);
  columns = Number(columnInput.value);
  if (Number.isNaN(rows) || Number.isNaN(columns)) {
    console.log("Invalid Input !");
    return;
  } else {
    console.log(`Column is:${columns} and Row is:${rows}`);
  }
  tBody.innerHTML = "";
  for (let r = 0; r < rows; r++) {
    let newRow = document.createElement("tr");
    for (let c = 0; c < columns; c++) {
      let newData = document.createElement("td");
      newData.innerText = `Row: ${r + 1} Colunm: ${c + 1}`;
      newRow.appendChild(newData);
    }
    tBody.appendChild(newRow);
  }
}

rowInput.addEventListener("input", updateTable);
columnInput.addEventListener("input", updateTable);
