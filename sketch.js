let grid = document.getElementById('grid');
var slider = document.getElementById("myRange"); 
var color = 'dark';
var side = slider.value;
let mouseDown = false; 
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
drawGrid();
slider.oninput = function() {
    side = slider.value;
    wipeGrid();
    drawGrid();
}    
function wipeGrid() {
    grid.innerHTML = '';
    drawGrid();
}
function drawGrid() {
    let dimens = document.getElementById('grid').clientWidth / side;
    grid.style.gridTemplateColumns = `repeat(${side - 3}, ${dimens}px) 1fr 1fr 1fr`;
    grid.style.gridTemplateRows = `repeat(${side - 3}, ${dimens}px) 1fr 1fr 1fr`;
    for(let i = 0; i < (side ** 2); i++){
        let square = document.createElement('div')
        grid.appendChild(square)
        square.classList.add('dark')
        square.classList.add('border-top-left');
    }
    const edge = document.querySelectorAll(`.square:nth-child(${side}n)`);
    for (let i = 0; i < edge.length; i++) {
    edge[i].setAttribute('data-right', 'true');
    edge[i].classList.toggle('border-right');
    }
    const stragglers = Array.from(grid).slice(-`${side}`);
    for (let i = 0; i < stragglers.length; i++) {
        stragglers[i].setAttribute('data-bottom', 'true');
        stragglers[i].classList.toggle('border-bottom');
    }
    let squares = grid.querySelectorAll('div')
    squares.forEach((square) => { 
        square.addEventListener('mouseover', (e) => {if (mouseDown == true) {
            e.target.classList.add(`light`)
        }})
    })
}

function canvasColor() {
    //if (e.type === 'mouseover' && !mouseDown) return
    switch (color) {
        case (color == 'dark'):
            color = 'light';
            return color;
        case (color == 'light'):
            color = 'dark';
            return color;
    }
}