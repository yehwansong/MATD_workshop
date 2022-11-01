var x2 = 0, y2 = 0;

var stroke = 50;

var counter = 0;

var text = [
    "It is only rarely that a psychoanalyst feels impelled to investigate the subject of aesthetics even when aesthetics is understood to mean not merely the theory of beauty, but the theory of the qualities of feeling. He works in other planes of mental life and has little to do with those subdued emotional activities which, inhibited in their aims and dependent upon a multitude of concurrent factors, usually furnish the material for the study of aesthetics. But it does occasionally happen that he has to interest himself in some particular province of that subject; and then it usually proves to be a rather remote region of it and one that has been neglected in standard works. ",
    "The subject of the “uncanny” is a province of this kind. It undoubtedly belongs to all that is terrible—to all that arouses dread and creeping horror; it is equally certain, too, that the word is not always used in a clearly definable sense, so that it tends to coincide with whatever excites dread. Yet we may expect that it implies some intrinsic quality which justifies the use of a special name. One is curious to know what this peculiar quality is which allows us to distinguish as “uncanny” certain things within the boundaries of what is “fearful.” ",
    "As good as nothing is to be found upon this subject in elaborate treatises on aesthetics, which in general prefer to concern themselves with what is beautiful, attractive and sublime, that is with feelings of a positive nature, with the circumstances and the objects that call them forth, rather than with the opposite feelings of unpleasantness and repulsion. I know of only one attempt in medicopsychological literature, a fertile but not exhaustive paper by E. Jentsch. But I must confess that I have not made a very thorough examination of the bibliography, especially the foreign literature, relating to this present modest contribution of mine, for reasons which must be obvious at this time; so that my paper is presented to the reader without any claim of priority. ",
    "In his study of the “uncanny,” Jentsch quite rightly lays stress on the obstacle presented by the fact that people vary so very greatly in their sensitivity to this quality of feeling. The writer of the present contribution, indeed, must himself plead guilty to a special obtuseness in the matter, where extreme delicacy of perception would be more in place. It is long since he has experienced or heard of anything which has given him an uncanny impression, and he will be obliged to translate himself into that state of feeling, and to awaken in himself the possibility of it before he begins. Still, difficulties of this kind make themselves felt powerfully in many other branches of aesthetics; we need not on this account despair of finding instances in which the quality in question will be recognized without hesitation by most people. ",
    "Two courses are open to us at the start. Either we can find out what meaning has come to be attached to the word “uncanny” in the course of its history; or we can collect all those properties of persons, things, sensations, experiences and situations which arouse in us the feeling of uncanniness, and then infer the unknown nature of the uncanny from what they all have in common. I will say at once that both courses lead to the same result: the “uncanny” is that class of the terrifying which leads back to something long known to us, once very familiar. How this is possible, in what circumstances the familiar can become uncanny and frightening, I shall show in what follows. Let me also add that my investigation was actually begun by collecting a number of individual cases, and only later received confirmation after I had examined what language could tell us. In this discussion, however, I shall follow the opposite course. ",
    "The German word unheimlich is obviously the opposite of heimlich, heimisch, meaning “familiar,” “native,” “belonging to the home”; and we are tempted to conclude that what is “uncanny” is frightening precisely because it is not known and familiar. Naturally not everything which is new and unfamiliar is frightening, however; the relation cannot be inverted. We can only say that what is novel can easily become frightening and uncanny; some new things are frightening but not by any means all. Something has to be added to what is novel and unfamiliar to make it uncanny. "
]

document.onmousemove = function(e) {
    document.getElementById("box").style.left = (e.clientX + 30) + "px";
    document.getElementById("box").style.top = (e.clientY + 30) + "px";

    var distance = Math.sqrt((Math.pow(x2 - e.clientX,2))+(Math.pow(y2 - e.clientY,2)));

    if (stroke > 0) {
        stroke -= distance * 0.1;
    } else {
        stroke = 0;
    }

    x2 = e.clientX;
    y2 = e.clientY;
};

document.onclick = function(e) {
    counter++;
    document.getElementById("box").innerHTML = text[counter%6];
    document.getElementById("credit").innerHTML = (counter%6 + 1) + "/6";
};

setInterval(function () {
    if (stroke < 50) {
        stroke += 0.2;
    }

    document.getElementById("box").style['-webkit-text-stroke'] = stroke + "px black";
}, 1000/30);