const grid = document.querySelectorAll('.col');
var box = [];
const square = 16;
var row = square, col = row;
function drawGrid() {
    output = "";
    for(row = 0;row < square; row++){
        box[row] = [];
        output += "<div class='row'>";
        for(col = 0;col < square; col++){
            box[row][col] = ''
            box[row].push([col]);
            output += "<div class='col'></div>";
        }
        output += "</div>";
    }
    document.getElementById('grid').innerHTML = output;
}
drawGrid();
box.forEach((div) => {
    div.addEventListener('click', (e) => {console.log(e)})});