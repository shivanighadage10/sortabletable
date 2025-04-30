const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('userTableBody');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const gender = document.getElementById('gender').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${gender}</td>
  `;
  tableBody.appendChild(row);
  form.reset();
});

function sortTable(colIndex) {
  const table = document.getElementById("userTable");
  const rows = Array.from(table.rows).slice(1);
  const sortedRows = rows.sort((a, b) => {
    return a.cells[colIndex].textContent.localeCompare(b.cells[colIndex].textContent);
  });
  for (let row of sortedRows) {
    tableBody.appendChild(row);
  }
}

// Filtering
document.getElementById('searchName').addEventListener('input', filterTable);
document.getElementById('filterGender').addEventListener('change', filterTable);

function filterTable() {
  const nameFilter = document.getElementById('searchName').value.toLowerCase();
  const genderFilter = document.getElementById('filterGender').value;

  const rows = tableBody.querySelectorAll('tr');
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const gender = row.cells[2].textContent;
    const matchName = name.includes(nameFilter);
    const matchGender = genderFilter === "" || gender === genderFilter;
    row.style.display = matchName && matchGender ? '' : 'none';
  });
}
