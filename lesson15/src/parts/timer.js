function timer() {
    let deadline = "2019-05-20";

    let getTimeRemaning = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds 
        };
    }
    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock(){
            let t = getTimeRemaning(endtime);
            if (t.hours < 10){
                t.hours = '0' + t.hours;
            }
                if (t.minutes < 10) {
                    t.minutes = '0' + t.minutes;
                }
                    if (t.seconds < 10){
                        t.seconds = '0' + t.seconds;
                    }
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if(t.total <= 0){
                clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        }
    }
    setClock('timer',deadline);
}
module.exports = timer;