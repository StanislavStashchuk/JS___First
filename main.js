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

        //24hr Format
        hour = hour % 24 || 12;

        //Output Time

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

        if(hour < 12) {
            //Morning
            document.body.main.backgroundImage = "url()"
        } else if (hour < 18) { 
            //Afternoon
        } else {
            //Evening
        }

    }

    //Run
    showTime();