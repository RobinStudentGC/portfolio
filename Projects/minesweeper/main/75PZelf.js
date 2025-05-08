$(document).ready(function () {

    $('td').each((index) => {
        if (index % 2 == 1)
        {
            $(this).css('background-color', 'green');
        }
        else 
        {
            $(this).css('background-color', 'blue');
        }
    });


    let minesSet = false;
    const offsets = [-10, -9, -8, -1, +1, +8, +9, +10];

    let revealedCells = new Set();

    $('td').click(function (e) {
        const cell = $(this);
        const cellIndex = $('td').index(cell);
        cell.addClass('selected')
        console.log('Cell clicked: ' + (cellIndex));

        if (!minesSet) 
        {
            minesSet = true;
            setMines(cellIndex);
        }

        if (cell.data('mine'))
        {
            alert("You hit a mine!");
            cell.css('background-color', 'red').off('click mouseenter mouseleave');
        }
        else
        {
            revealCell(cellIndex);
        }
    });



    function setMines(cellIndex) {
        const Beginner = 10;
        let mines = [];

        for (let i = 0; i < Beginner; i++) {

            let random = Math.floor(Math.random() * 81);
            let targetCell = $('td').eq(random); 
            // Selecteert de index number op de value van random. Als die 0 is, dan is de targetCell het eerste vakje. 1 het 1ste, etc.

            if (targetCell.data('mine') || random === cellIndex) 
            {
                i--; // Nog een poging om de mine goed te genereren.
            } 
            else 
            {
                targetCell.data('mine', true);
                mines.push(random);
            }
        }
        console.log('Mines created at indices: ' + mines.join(', '));
    };

    function getNeighbors(cellIndex) 
    {
        return neighbors = offsets.map(offset => cellIndex + offset).filter(
            index => {
                let check = true;
                if (cellIndex % 9 === 0 && [-1, -10, +8].includes(index - cellIndex)) 
                {
                    check = false;
                }
                if (cellIndex % 9 === 8 && [+1, -8, +10].includes(index - cellIndex)) 
                {
                    check = false;
                }
                if (index > 80)
                {
                    check = false;
                }
                if (index < 0)
                {
                    check = false;
                }

                return check;
            }
        )
    }

    function revealCell(cellIndex)
    {
        if (revealedCells.has(cellIndex)) return;
        revealedCells.add(cellIndex);

        let mineCounter = 0;
        let neighbors = getNeighbors(cellIndex);
        console.log(neighbors);

        neighbors.forEach((e) => {
            let target = $('td').eq(e);
            if (target.data('mine'))
            {
                mineCounter++;
                console.log(mineCounter)
            }
        })

        let currentCell = $('td').eq(cellIndex);
        currentCell.css('background-color', 'beige').off('click mouseenter mouseleave');

        if (mineCounter > 0)
        {
            currentCell.text(mineCounter);
        }
        else
        {
            neighbors.forEach((e) => {
                if (!revealedCells.has(e)) {
                    revealCell(e);
                }
            });
        }
    }
});
