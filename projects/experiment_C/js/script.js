var  a = 0, a2 = 0;

var stroke = 50;

function handleOrientation(event) {
    a = event.alpha;
}

document.getElementById("overlay").onclick = function(e) {
    document.getElementById("overlay").classList.add("hidden");
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((state) => {
            if (state === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation);
            } else {
                document.getElementById("box").innerHTML = "access to device gyroscope denied";
            }
            })
        .catch(console.error);
    } else {
        window.addEventListener('deviceorientation', handleOrientation);
    }
};

setInterval(function () {
    var change = Math.abs(a-a2);

    if (change > 180) {
        change = 360 - change;
    }

    if (stroke < 50) {
        stroke += 2;
    }

    if (stroke > 0) {
        stroke -= change;
    }

    document.getElementById("box").style['-webkit-text-stroke'] = stroke + "px rgb(224, 224, 224)";

    document.getElementById("box").style['rotate'] = a + "deg";

    a2 = a;
}, 1000/60);