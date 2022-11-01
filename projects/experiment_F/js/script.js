var text = document.getElementById("box").innerHTML.split('');

document.getElementById("box").innerHTML = "";

for (var i = 0; i < text.length; i++) { 
    document.getElementById("box").innerHTML += '<span class="letter">' + text[i] + '</span>';
}

var el = [...document.getElementsByClassName("letter")];

document.onmousemove = function(e) {
    for (var i = 0; i < el.length; i++) { 
        var distance = Math.sqrt((Math.pow(el[i].offsetLeft + el[i].offsetWidth/2 - e.clientX,2))+(Math.pow(el[i].offsetTop + el[i].offsetHeight/2 - e.clientY,2)))
        el[i].style['-webkit-text-stroke'] = Math.min(Math.max(distance*0.1-20, 0), 40) + "px black";
    }
};