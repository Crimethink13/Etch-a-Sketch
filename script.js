const grid = document.querySelector('.grid');
const gridBackground = document.querySelector('.grid-background');
const row = document.createElement('div');
const column = document.createElement('div');
const square = document.getElementsByClassName('column');
const favColor = document.getElementById('fav-color');
const black = document.getElementById('black');
const white = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const bgToggle = document.getElementById('bg-toggle');
const gridToggle = document.getElementById('grid-toggle');
const gridSize = document.getElementById('grid-size');
const gridValue = document.getElementById('grid-value');

let colorMode = 'rainbow';
let rainbowColors = [
	'#ff0000',
	'#ff8000',
	'#ffff00',
	'#80ff00',
	'#00ff00',
	'#00ff80',
	'#00ffff',
	'#0080ff',
	'#0000ff',
	'#8000ff',
	'#ff00ff',
	'#ff0080'
];

mouseDown = false;
document.addEventListener('mousedown', () => {
	mouseDown = true;
});
document.addEventListener('mouseup', () => {
	mouseDown = false;
});

favColor.onclick = () => (colorMode = 'favColor');
rainbow.onclick = () => (colorMode = 'rainbow');
black.onclick = () => (colorMode = 'black');
white.onclick = () => (colorMode = 'white');
clear.onclick = () => clearGrid();
bgToggle.onclick = () => toggleBackColor();
gridToggle.onclick = () => toggleGridLines();
gridSize.onmousemove = () => updateGridValue();

gridSize.addEventListener('click', clearGrid);

function createGrid(row, column) {
	for (let i = 0; i < gridSize.value; i++) {
		row = document.createElement('div');
		row.classList.add('row');
		grid.appendChild(row);

		for (let i = 0; i < gridSize.value; i++) {
			column = document.createElement('div');
			column.classList.add('column');
			row.appendChild(column);

			column.addEventListener('mouseover', userSelect);
			column.addEventListener('mousedown', userSelect);
		}
	}
}

function userSelect(Event) {
	if (Event.type === 'mouseover' && mouseDown === false) return;
	if (colorMode === 'favColor') {
		this.style.backgroundColor = favColor.value;
	} else if (colorMode === 'black') {
		this.style.backgroundColor = '#000';
	} else if (colorMode === 'white') {
		this.style.backgroundColor = '#fff';
	} else if (colorMode === 'rainbow') {
		for (let i = 0; i < rainbowColors.length; i++) {
			this.style.backgroundColor = rainbowColors[i];
			rainbowColors.push(rainbowColors.shift());
			break;
		}
	}
}
function clearGrid() {
	grid.textContent = '';
	createGrid();
	toggleGridLines();
}

function toggleBackColor() {
	if (grid.style.backgroundColor === 'black') {
		grid.style.backgroundColor = 'white';
	} else {
		grid.style.backgroundColor = 'black';
	}
}

function toggleGridLines() {
	for (i = 0; i < square.length; i++) {
		square[i].classList.toggle('border');
	}
}

function updateGridValue() {
	gridValue.textContent = `${gridSize.value} x ${gridSize.value}`;
}

window.ondragstart = function() {
	return false;
};

window.onload = () => {
	createGrid();
	toggleGridLines();
	updateGridValue();
};
