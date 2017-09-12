const c = document.getElementById('pixel_canvas');
let temph = $("#input_height");
let tempw = $("#input_width");


$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

function makeGrid() {

    c.innerHTML = '';
    let height = temph.val();
    let width = tempw.val();

    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}