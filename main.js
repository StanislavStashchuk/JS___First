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

        // Set AM or PM
        const amPm = hour >= 12 ? 'PM' : 'AM';

        //12hr Format
        hour = hour % 12 || 12;

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

        if (hour < 12) {
            //Morning
            document.body.style.backgroundImage = "url('../img/11.jpg')";
            greeting.textContent = 'ранку';
        } else if (hour < 18) { 
            //Afternoon
            document.body.style.backgroundImage = "url('../img/22.jpg')";
            greeting.textContent = 'дня';
        } else {
            //Evening
            document.body.style.backgroundImage = "url('../img/33.jpg')";
            greeting.textContent = 'вечора';
            document.body.style.color = 'white';
        }

    }

    //Run
    showTime();
    setGreet();