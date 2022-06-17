const griddle = document.querySelectorAll('div');
var box = [];
const square = 16;
var row = square, col = row;
function drawGrid() {
    output = "";
    for(row = 0;row < square; row++){
        box[row] = [];
        output += "<div class='default'>";
        for(col = 0;col < square; col++){
            box[row][col] = ''
            box[row].push([col]);
            output += `<div id="box[${row}][${col}]" class='default'></div>`;
        }
        output += "</div>";
    }
    document.getElementById('griddle').innerHTML = output;
}
drawGrid();

colorDict = {
    0: 'default',
    1: 'white'
}

//function hover(div, white){
//    div.addEventListener('mouseenter', e => div.classList.add('white'));
//    div.addEventListener('mouseleave', e => div.classList.add('default'));
//}
//hover(document.querySelector('div'), 'white');
griddle.forEach((div) => {
    div.addEventListener('click', (e) => {e.target.classList.toggle('white');
    div.addEventListener('mouseenter', e => div.classList.add('white'));
    div.addEventListener('mouseleave', e => div.classList.add('default'));
    
    //const temp = e.target.id;
    })
});

