const grid = document.querySelector('.grid');

const column = document.createElement('div');
const row = document.createElement('div');

function createGrid(row, column) {
	for (let i = 0; i < 16; i++) {
		row = document.createElement('div');
		row.classList.add('row');
		grid.appendChild(row);

		for (let i = 0; i < 16; i++) {
			column = document.createElement('div');
			column.classList.add('column');
			row.appendChild(column);
		}
	}
}

createGrid();

column.forEach((square) => {
	square.addEventListener('click', function() {
		console.log('fuck');
	});
});
