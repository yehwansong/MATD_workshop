var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine = Engine.create();

engine.gravity.x = 0;
engine.gravity.y = 1;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 2,
        background: 'transparent',
        wireframes: false,
      }
});

var elA = Bodies.circle(window.innerWidth / 2, window.innerHeight / 2, 10, {render: { fillStyle: 'rgba(255, 0, 0, 0)' }});

var boundBottom = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 60, { isStatic: true });
var boundRight = Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true });
var boundTop = Bodies.rectangle(window.innerWidth / 2, -30, window.innerWidth, 60, { isStatic: true });
var boundLeft = Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true });

Composite.add(engine.world, [elA, boundBottom, boundRight, boundTop, boundLeft]);

Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);

var text = document.getElementById("box").innerHTML.split('');

document.getElementById("box").innerHTML = "";

for (var i = 0; i < text.length; i++) { 
    document.getElementById("box").innerHTML += '<span class="letter">' + text[i] + '</span>';
}

var el = [...document.getElementsByClassName("letter")];

var b = 45;
var g = 0;

function handleOrientation(event) {
    b = event.beta;
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
    var x = g / 45;
    var y = b / 45;
    engine.gravity.x = x;
    engine.gravity.y = y;

    for (var i = 0; i < el.length; i++) { 
        var distance = Math.sqrt((Math.pow(el[i].offsetLeft+el[i].offsetWidth/2-elA.position.x,2))+(Math.pow(el[i].offsetTop+el[i].offsetHeight/2-elA.position.y,2)));
        el[i].style['-webkit-text-stroke'] = Math.min(Math.max(distance*0.1-8, 0), 40) + "px rgb(224, 224, 224)";
    }
}, 1000/30);