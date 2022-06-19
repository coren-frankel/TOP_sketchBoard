let grid = document.getElementById('grid');
var slider = document.getElementById("myRange"); 
var color = 'dark';
var side = slider.value;
let mouseDown = false; 
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
drawGrid(side);
slider.onmouseup = function() {
    wipeGrid();
    side = slider.value;
    
    drawGrid(side);
}    
function wipeGrid() {
    grid.innerHTML = '';
}
function drawGrid(side) {
    let dimens = document.getElementById('grid').clientWidth / side;
    grid.style.gridTemplateColumns = `repeat(${side - 3}, ${dimens}px) 1fr 1fr 1fr`;
    grid.style.gridTemplateRows = `repeat(${side - 3}, ${dimens}px) 1fr 1fr 1fr`;
    for(let i = 1; i < (side*side); i++){
        let square = document.createElement('div')
        grid.appendChild(square)
        square.classList.add('dark')
        square.style.width = dimens + 'px';
        square.style.height = dimens + 'px';
        //square.classList.add('border-top-left');
        }
}
let squares = document.querySelectorAll('div')
squares.forEach((square) => { 
    square.addEventListener('mouseover', (e) => {if (mouseDown == true) {
        e.target.classList.add(`light`)
    }})
})
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
};