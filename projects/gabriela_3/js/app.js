// select the item element
const item = document.querySelector('.item');

// attach the dragstart event handler
item.addEventListener('dragstart', dragStart);

// handle the dragstart

function dragStart(e) {
   console.log('drag starts...');
}
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('hide');
}
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);

}
// attempt at making all items draggable//
// let items = document.querySelectorAll('.item');
// for(let i = 0; i<items.length; i++){}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
}

function dragOver(e) {
}

function dragLeave(e) {
}

function drop(e) {
}

function dragEnter(e) {
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

}
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function drop(e) {
    console.log('-----')
    e.target.classList.remove('drag-over');

    // get the draggable element

    
 const id = e.dataTransfer.getData('text/plain');
    console.log(e.target)
    console.log(id)

const draggable = document.getElementById(id);
var z = document.createElement ('h1'); 
 z.innerHTML = 'tenerezza';

    // add it to the drop target
    e.target.appendChild(z);
    e.target.appendChild(draggable);


    // display the draggable element
    draggable.classList.remove('hide');
    z.classList.remove('hide');
}

