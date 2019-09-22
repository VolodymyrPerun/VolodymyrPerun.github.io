
let myAudio = document.getElementById("myAudio");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause()
}

let alert = function (message) {
    let div = document.createElement('div');
    div.innerHTML = '<h1>' + message + '</h1>';
    document.body.appendChild(div);
    div.style.color = 'red';
    div.style.background = 'black';
    div.style.border = '1px solid red';
    div.style.display = 'block';
    div.style.fontSize = '15px';
    div.style.bottom = '500px';
    div.style.position = 'absolute';
    div.style.left = '725px';
    div.style.textAlign = 'center';
    div.style.padding = '10px';
};

var buttons = document.querySelector('.buttons');
var stopBtn = document.querySelector('.stop');
stopBtn.innerText = 'Завершити гру / Почати нову гру';

function login(name, age) {
    let bot = document.getElementById("bot");
    age = +prompt('Введіть свій вік');
    if (age >= 7 && typeof age === "number") {
        document.querySelector('.login').innerHTML = 'ГРАВЕЦЬ: ' +
            prompt('Введіть своє ім\'я' + ', ласкаво просимо').toLocaleUpperCase();

    } else {
        alert('Ви не досягли відповідного віку!');
        let smiley = document.querySelector(".smiley");
        smiley.style.display = 'none';
        bot.style.display = 'none';
        stopBtn.innerText = 'Почати нову гру';
        buttons.style.bottom = '350px';
        buttons.style.left = '850px';
    }
}

login();

function getElement(element) {
    return document.querySelector(element);
}


var [text] = document.getElementsByClassName("text");
getElement('.smiley').ondblclick = function () {
    this.style.display = 'none';
    text.innerText = 'Mолодець:)!!!';
    text.style.color = 'red';
    text.style.background = 'white';
    clearTimeout(stopTimer);
    let bot = document.getElementById("bot");
    bot.style.display = 'none';
    let buttons = document.querySelector(".buttons");
    let smiley = document.querySelector(".smiley");
    smiley.style.display = 'none';
    buttons.style.bottom = '320px';
    buttons.style.left = '830px';
    stopBtn.innerText = 'Почати нову гру';
};

var stopTimer;

//Функция для старта
function testTimer(startTime) {
    let toggle = false;
    getElement('.smiley').onmouseover = function () {
        if (toggle) {
            this.style.background = 'red';
            this.style.height = '100px';
            this.style.width = '100px';
            this.style.transition = 'all .9s';
            this.style.top = Math.floor(Math.random() *
                ((70 - 1 + 1)) + 1) + '%';

            this.style.left = Math.floor(Math.random() *
                ((70 - 1 + 1)) + 1) + '%';
            toggle = false;
        } else {
            this.style.background = 'yellow';
            this.style.height = '50px';
            this.style.width = '50px';
            this.style.transition = 'all .9s';
            this.style.top = Math.floor(Math.random() *
                ((70 - 1 + 1)) + 1) + '%';

            this.style.left = Math.floor(Math.random() *
                ((70 - 1 + 1)) + 1) + '%';
            toggle = true;
        }

    };


    //для повторного запуска очистим rezult
    document.getElementById("rezult").innerHTML = '';
    //выключим кнопку запуска
    var bot = document.getElementById("bot");
    bot.setAttribute("disabled", "");
    //сколько будет длиться обратный отчет
    var time = startTime;
    //определим сколько минут
    var min = parseInt(time / 60);
    if (min < 1) min = 0;
    time = parseInt(time - min * 60);
    if (min < 10) min = '0' + min;
    //определим сколько секунд
    var seconds = time;
    if (seconds < 10) seconds = '0' + seconds;
    //отрисовываем время
    document.getElementById("time").innerHTML = '<span>Залишилось часу - ' + min + ' хв ' + seconds + ' секунд</span>';
    //уменьшаем общее время на одну секунду
    startTime--;
    //смотрим время не закончилось
    if (startTime >= 0) {
        //если нет, то повторяем процедуру заново
        stopTimer = setTimeout(function () {
            testTimer(startTime);
        }, 1000);
        //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
    } else {
        document.getElementById("time").innerHTML = '<span>Залишилось часу - 00 хв 00 секунд</span>';
        var rezult = document.getElementById("rezult");
        rezult.innerHTML = "Час вийшов";
        text.innerText = 'Нажаль ви не впорались;(';
        clearTimeout(stopTimer);
        let bot = document.getElementById("bot");
        bot.style.display = 'none';
        let buttons = document.querySelector(".buttons");
        let smiley = document.querySelector(".smiley");
        smiley.style.display = 'none';
        buttons.style.bottom = '320px';
        buttons.style.left = '830px';
        stopBtn.innerText = 'Почати нову гру';
    }

    localStorage.setItem('result', JSON.stringify('Останній результат - ' + min + ' хв ' + seconds + ' секунд'));
}

//Функция для остановки обратного отчета
function stop() {
    //очистим переменную с таймером
    clearTimeout(stopTimer);
    //и включим кнопку запуска
    var bot = document.getElementById("bot");
    bot.removeAttribute("disabled", "disabled");
    location.reload()
}

let item = localStorage.getItem('result');
console.log(JSON.parse(item));
document.querySelector(".chronics").innerHTML = JSON.parse(item);