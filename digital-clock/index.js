const hoursRD = document.getElementById("hour");
const minutesRD = document.getElementById("minutes");
const secondsRD = document.getElementById("seconds");
const ampmRD = document.getElementById("ampm");

function Clock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursRD.innerText = h;
    minutesRD.innerText = m;
    secondsRD.innerText = s;
    ampmRD.innerText = ampm;
    
    setTimeout(() => {
        Clock()
    }, 1000)
}

Clock()