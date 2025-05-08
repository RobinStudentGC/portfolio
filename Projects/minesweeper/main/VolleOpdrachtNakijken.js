$(document).ready(function () {
    let minesSet = false;
    const offsets = [-10, -9, -8, -1, +1, +8, +9, +10];
    let revealedCells = new Set();
    const Beginner = 10; // Number of mines

    // Initialize the board with alternating colors
    initializeBoard();

    $('table').on('contextmenu', 'td', function (e) {
        e.preventDefault();
        const cell = $(this);
        if (cell.hasClass('revealed')) return; // Check if the space has been cleared yet

        cell.toggleClass('flagged');

        if (cell.hasClass('flagged')) {
            cell.text('🚩');
        } else {
            cell.text('');
        }
    });

    $('td').on('click',  function (e) {
        const cell = $(this);
        const cellIndex = $('td').index(cell);
        cell.addClass('selected');
        console.log('Cell clicked: ' + cellIndex);
        let aantalRevealed = (Array.from(revealedCells.keys()).length) - Beginner;

        console.log(aantalRevealed);
        console.log(Array.from(revealedCells.keys()).length);

        if (!minesSet) {
            minesSet = true;
            setMines(cellIndex);
        }

        if (cell.data('mine')) {
            cell.css('background-color', 'red');
            alert("You hit a mine!");
            restartGame();
        } else if (aantalRevealed >= 60) {
            alert("You won!");
            restartGame();
        } else {
            revealCell(cellIndex);
        }
    });

    function initializeBoard() {
        $('td').each(function (index) {
            if (index % 2 === 0) {
                $(this).css('background-color', 'green');
            } else {
                $(this).css('background-color', 'darkgreen');
            }
        });
    }

    function setMines(cellIndex) {
        let mines = [];

        for (let i = 0; i < Beginner; i++) {
            let random = Math.floor(Math.random() * 81);
            let targetCell = $('td').eq(random);

            if (targetCell.data('mine') || random === cellIndex) {
                i--; // Retry generating the mine
            } else {
                targetCell.data('mine', true);
                mines.push(random);
            }
        }
        console.log('Mines created at indices: ' + mines.join(', '));
    }

    function getNeighbors(cellIndex) {
        let neighbors = [];
        const row = Math.floor(cellIndex / 9);
        const col = cellIndex % 9;

        offsets.forEach(offset => {
            let neighborIndex = cellIndex + offset;
            let neighborRow = Math.floor(neighborIndex / 9);
            let neighborCol = neighborIndex % 9;

            if (neighborIndex >= 0 && neighborIndex < 81 &&
                (neighborRow === row || neighborRow === row - 1 || neighborRow === row + 1) &&
                (neighborCol === col || neighborCol === col - 1 || neighborCol === col + 1)) {
                neighbors.push(neighborIndex);
            }
        });

        return neighbors;
    }

    function revealCell(cellIndex) {
        if (revealedCells.has(cellIndex)) return;
        revealedCells.add(cellIndex);

        let mineCounter = 0;
        let neighbors = getNeighbors(cellIndex);
        console.log('Neighbors of index ' + cellIndex + ': ' + neighbors);

        neighbors.forEach((neighborIndex) => {
            let target = $('td').eq(neighborIndex);
            if (target.data('mine')) {
                mineCounter++;
                console.log('Mine found at index ' + neighborIndex);
            }
        });

        let currentCell = $('td').eq(cellIndex);
        currentCell.addClass('revealed').css('background-color', 'tan');

        if (mineCounter > 0) {
            currentCell.text(mineCounter);
        } else {
            console.log('No mines around. Revealing neighbors...');
            neighbors.forEach(neighborIndex => {
                console.log('Checking neighbor: ' + neighborIndex);
                if (!revealedCells.has(neighborIndex)) {
                    revealCell(neighborIndex);
                }
            });
        }
    }

    function restartGame() {
        // Reset the board
        $('td').each(function () {
            $(this).removeClass('selected revealed').text('').data('mine', false);
        });

        // Reinitialize the board with alternating colors
        initializeBoard();

        // Reset game state
        minesSet = false;
        revealedCells.clear();
    }
});