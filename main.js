//DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeteng'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    // Time

    function showTime() {
        let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

        //24hr format
        hour = hour % 12 || 12;

        //Output time

        time.innerHTML = `${hour}<span> :<span>${addZeros(min)}<span> :<span>${addZeros(sec)}`;
        setTimeout(showTime, 1000 );        
    }

    //Add Zenos
    function addZeros(n) {
        return (parseInt(n, 10) < 10 ? '0' : ' ') + n;
    }

    //Greeting
    function setGreet() {
        let today = new Date(),
        hour = today.getHours();

    }

    //Run
    showTime();