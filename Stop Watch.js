let timer;
let isRunning = false;

function to_start() {
    if (isRunning) return; 
    isRunning = true;

    var h, m, s;

    function updateClock() {
        h = document.getElementsByClassName("Hours")[0];
        m = document.getElementsByClassName("Minutes")[0];
        s = document.getElementsByClassName("Seconds")[0];

        s.innerHTML = parseInt(s.innerHTML) + 1;

        if (parseInt(s.innerHTML) === 60) {
            s.innerHTML = "00";
            m.innerHTML = parseInt(m.innerHTML) + 1;
        }
        if (parseInt(m.innerHTML) === 60) {
            m.innerHTML = "00";
            h.innerHTML = parseInt(h.innerHTML) + 1;
        }
        if (parseInt(h.innerHTML) === 24) {
            h.innerHTML = "00";
        }
    }

    timer = setInterval(updateClock, 1000);
}

function stopClock() {
    clearInterval(timer);
    isRunning = false;
}

function resetClock() {
    stopClock();
    document.getElementsByClassName("Hours")[0].innerHTML = "00";
    document.getElementsByClassName("Minutes")[0].innerHTML = "00";
    document.getElementsByClassName("Seconds")[0].innerHTML = "00";
}

document.querySelector('.Start').onclick = to_start;
document.querySelector('.Stop').onclick = stopClock;
document.querySelector('.Reset').onclick = resetClock;