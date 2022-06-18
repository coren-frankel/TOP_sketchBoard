const griddle = document.querySelectorAll(`div`);
var box = [], color = 'dark';
const square = 16;
var row = square, col = row;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function hueStroke(e) {
    //if (e.type === 'mouseover' && !mouseDown) return
    switch (color) {
        case 'dark':
            this.classList.add('light');
        case 'light':
            this.classList.add('dark');
    }
}


function drawGrid(square) {
    output = "";
    for(row = 0;row < square; row++){
        box[row] = [];
        output += "<div class='dark'>";
        for(col = 0;col < square; col++){
            box[row][col] = ''
            box[row].push([col]);
            output += `<div id="box[${row}][${col}]" class='dark'></div>`;
        }
        output += "</div>";
    }
    document.getElementById('griddle').innerHTML = output;
    
    griddle.forEach((div) => { 
        div.addEventListener('mouseover', (e) => {if (mouseDown == true) {
            e.target.classList.add(`light`)}})
        //div.addEventListener('mouseover', hueStroke)
    })
    
}

drawGrid(square);