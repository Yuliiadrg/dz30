function sortTable(columnIndex) {
    let table = document.getElementById("myTable");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));

    
    // отримую значення стовпця
    const getValue = (row) => {
      let cell = row.cells[columnIndex];
      let value = cell.textContent.trim();
      return isNaN(value) ? value : parseFloat(value);
    };


    // порядок сортування
    const sortOrder = table.dataset.sortOrder === "asc" ? 1 : -1;
    // сортувати рядки таблиці
    rows.sort((a, b) => {
      let aValue = getValue(a);
      let bValue = getValue(b);
      return sortOrder * (bValue > aValue ? 1 : -1);
    });


    // додаю відсортовані рядки до таблиці
    rows.forEach((row) => tbody.appendChild(row));
    // можливість зміни напрямку сортування
    table.dataset.sortOrder = table.dataset.sortOrder === "asc" ? "desc" : "asc";
  }