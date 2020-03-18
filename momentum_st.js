const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();    // 시간 설정
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
        minutes < 10 ? `0${minutes}` : `${minutes}`}:${
        seconds < 10 ? `0${seconds}` : `${seconds}` }`;
}   // 숫자 표기

// setInterval : 반복적으로 기능을 만들때


function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();