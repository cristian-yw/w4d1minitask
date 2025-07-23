const table = document.getElementById('data-table')
const tbody = table.querySelector('tbody')

const newrow = document.createElement('tr')
newrow.innerHTML = '<td>Charlie</td><td>92</td>'
tbody.appendChild(newrow)

const bob = [...tbody.rows].find(row => row.cells[0].textContent === 'Bob')
if (bob){
    bob.cells[1].textContent = '89';
}

const alice = [...tbody.rows].find(row =>row.cells[0].textContent === 'Alice')
if (alice){
    alice.classList.add('top-scorer')
}

const tfoot = document.createElement('tfoot')
const footer = document.createElement('tr')

const scores = [...tbody.rows].map(row => Number(row.cells[1].textContent));
const average = (scores.reduce((a, b) => a + b, 0) / scores.length);


footer.innerHTML = `<td>Rata-rata</td><td>${average}</td>`
tfoot.appendChild(footer)
table.appendChild(tfoot)