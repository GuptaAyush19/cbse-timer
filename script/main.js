$(document).ready(function() {
    // Final Countdown
    let countDownDate = new Date("4 May, 2021").getTime();

    setInterval(function() {
        // Get present date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        $("p#time").text(time);

    }, 500);
});