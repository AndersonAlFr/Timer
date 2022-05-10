var sec = 0
var min = 0
var hr = 0

var interval

function start() {
    time()
    interval = setInterval(time, 1000)
}

function pause() {
    interval = clearInterval(interval)
}

function stop() {
    interval = clearInterval(interval)
    sec = 0
    min = 0
    hr = 0
    document.getElementById('num').innerText = '00:00:00'
}

function time() {
    sec++
    if (sec === 60){
        min++
        sec = 0
    }
    if (min === 60){
        hr++
        min = 0
    }
    document.getElementById("num").innerText = twonum(hr)+':'+twonum(min)+':'+twonum(sec)
}

function twonum(twonum) {
    if (twonum < 10){
        return (twonum = '0' + twonum)
    }else{
        return(twonum)
    }
}
