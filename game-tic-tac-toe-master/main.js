

let alert = function (message) {
    let div = document.createElement('div');
    div.innerHTML = '<h1>' + message + '</h1>';
    document.body.appendChild(div);
    div.style.color = 'red';
    div.style.background = 'black';
    div.style.border = '1px solid red';
    div.style.display = 'block';
    div.style.fontSize = '15px';
    div.style.marginLeft = 'auto';
    div.style.marginRight = 'auto';
    div.style.textAlign = 'center';
    div.style.padding = '10px';
    div.style.border = '20px solid brown';
};


let area = document.getElementById('area'),
    move = 0;
area.addEventListener('click', function (event) {
    if (move % 2 === 0) {
        event.target.innerHTML = 'X';
    } else {
        event.target.innerHTML = '0';
    }
    move++;
    check()
});

function check() {
    let boxes = document.getElementsByClassName('box');
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML === 'X'
            && boxes[arr[i][1]].innerHTML === 'X'
            && boxes[arr[i][2]].innerHTML === 'X') {
            alert('Перемогли хрестики!!!');
            function reloadX() {
                location.reload();
            }
            setTimeout(reloadX, 2000)

        } else if (boxes[arr[i][0]].innerHTML === '0'
            && boxes[arr[i][1]].innerHTML === '0'
            && boxes[arr[i][2]].innerHTML === '0') {
            alert('Перемогли нолики!!!');
            function reload0() {
                location.reload();
            }
            setTimeout(reload0, 2000)
        }
    }
}

