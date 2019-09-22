var twelveHour = typeof UsertwelveHr === 'undefined' ? true : UsertwelveHr;
var DisplaySecondHand = typeof UsershowSeconds === 'undefined' ? true : UsershowSeconds;

var debug = document.getElementById('debug');
function log(msg) {
    debug.innerHTML += JSON.stringify(msg);
    console.log(msg);
}

function startTime() {
    // twelveHour = true;
    // DisplaySecondHand = true;
    var relativeScale = 100;

    // ==== DO NOT MODIFY ANYTHING BELOW THIS LINE ==== //

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var day = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");
    var weekday = day[today.getDay()];
    var date = today.getDate();

    if (DisplaySecondHand == false) {
        document.getElementById('second').style.display = "none";
    };

    if (twelveHour == false) {
        document.getElementById('second').style.top = "-481px";
    }

    if (twelveHour && h >= 12) {
        document.getElementById("am-pm").innerHTML = "PM";
    }
    if (twelveHour && h == 0) {
        document.getElementById("am-pm").innerHTML = "AM";
    }
    if (twelveHour == true) {
        h = h % 12;
        document.getElementById("am-pm").style.display = "block";
    }
    if (twelveHour && h == 0) {
        h = 12;
    }
    if (m < 10) {
        var m = "0" + m;
    }
    if (h < 10) {
        var h = "0" + h;
    }
    document.getElementById('container').style.webkitTransform = "scale(" + relativeScale  / 100 + ")";
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('day').innerHTML = weekday;
    document.getElementById('date').innerHTML = date;

    setTimeout(function() {
        startTime()
    }, 500);
}

var element = document.getElementById('second');

var seconds = new ProgressBar.Circle(element, {
    duration: 200,
    color: "#FFF",
    trailColor: "transparent",

});


setInterval(function() {
    var second = new Date().getSeconds();
    seconds.animate(second / 60, function() {
        seconds.setText(second);
    });
}, 1000);
