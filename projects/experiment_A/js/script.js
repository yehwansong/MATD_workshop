var g;

var text = document.getElementById("box").innerHTML.split('');

document.getElementById("box").innerHTML = "";

for (var i = 0; i < text.length; i++) { 
    document.getElementById("box").innerHTML += '<span class="letter">' + text[i] + '</span>';
}

var el = [...document.getElementsByClassName("letter")];

function handleOrientation(event) {
    g = event.gamma;
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
    for (var i = 0; i < el.length; i++) { 
        var distance = Math.abs(el[i].offsetLeft + el[i].offsetWidth/2 - (g + 45) / 90 * window.innerWidth);
        el[i].style['-webkit-text-stroke'] = Math.min(Math.max(distance*0.1-8, 0), 40) + "px rgb(224, 224, 224)";
    }
}, 1000/30);
