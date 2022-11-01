var sensitivity = 20;

var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

var stroke = 50;

function handleOrientation(e) {
    x1 = e.accelerationIncludingGravity.x;
    y1 = e.accelerationIncludingGravity.y;
    z1 = e.accelerationIncludingGravity.z;
}

document.getElementById("overlay").onclick = function(e) {
    document.getElementById("overlay").classList.add("hidden");
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then((state) => {
            if (state === 'granted') {
                window.addEventListener('devicemotion', handleOrientation);
            } else {
                document.getElementById("box").innerHTML = "access to device gyroscope denied";
            }
            })
        .catch(console.error);
    } else {
        window.addEventListener('devicemotion', handleOrientation);
    }
};

setInterval(function () {
    var change = Math.abs(x1-x2+y1-y2+z1-z2);

    if (stroke < 50) {
        stroke += 0.8;
    }

    if (change > sensitivity) {
        stroke = 0;
    }

    document.getElementById("box").style['-webkit-text-stroke'] = stroke + "px rgb(224, 224, 224)";

    x2 = x1;
    y2 = y1;
    z2 = z1;
}, 1000/30);

