let grid = document.getElementById('grid'), slider = document.getElementById("myRange"); 
//DOM selectors for grid creation and adjustment
var canvas = 'dark', side = slider.value;
//Establish color variable hosting default, and set dimensions tied to slider value
drawGrid();

slider.oninput = function() {
    wipeGrid();//Adjust slider and get a new grid!
}    
function wipeGrid() {//Wipes previous grid and draws new one with the slider.value
    grid.innerHTML = '';
    side = slider.value;
    drawGrid();
}
function drawGrid() {//Set dimensions of grid per it's container
    let dimens = document.getElementById('grid').clientWidth / side;
    grid.style.gridTemplateColumns = `repeat(${side - 3}, ${dimens}px) 1fr 1fr 1fr`;
    grid.style.gridTemplateRows = `repeat(${side - 3}, ${dimens}px) 1fr 1fr 1fr`;
    for(let i = 0; i < (side ** 2); i++){
        let square = document.createElement('div')
        grid.appendChild(square)
        square.classList.add(`${canvas}`)
        square.classList.toggle('border-top-left');
    }
    const edge = grid.querySelectorAll(`.${canvas}:nth-child(${side}n)`);
    for (let i = 0; i < edge.length; i++) {
        //edge[i].setAttribute('data-right', 'true'); //what's the data attribute??
        edge[i].classList.add('border-right');
    }
    const squares = grid.querySelectorAll('div');
    const stragglers = Array.from(squares).slice(-`${side}`);
    for (let i = 0; i < stragglers.length; i++) {
        
        //stragglers[i].setAttribute('data-bottom', 'true'); //what's the data attribute??
        stragglers[i].classList.add('border-bottom');
    }
    clickDraw();
    
}
function clickDraw() {//McGraw
    let mouseDown = false; 
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);
    let squares = grid.querySelectorAll('div')
    squares.forEach((square) => { 
        square.addEventListener('mousemove', (e) => {if (mouseDown == true) {
            e.target.classList.add(`light`)
        }})
    })
}

function canvasColor() {
    //if (e.type === 'mouseover' && !mouseDown) return
    let squares = grid.querySelectorAll('div');
    switch (canvas) {
        case (canvas == 'dark'):
            canvas = 'light';
            wipeGrid();
            //squares.classList.add('light')
        case (canvas == 'light'):
            canvas = 'dark';
            wipeGrid();
            //squares.classList.add('dark')

    }
}
function sansBord() {
    //let squares = grid.querySelectorAll('div');
    squares.classList.remove('border-top-left');
    squares.classList.remove('border-bottom');
    squares.classList.remove('border-right');
};