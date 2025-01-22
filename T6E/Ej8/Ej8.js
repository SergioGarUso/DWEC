const div = document.querySelector('div');

div.addEventListener('click', (event) => {
    div.style.backgroundColor = 'red';
});

div.addEventListener('mouseover', (event) => {
    div.style.backgroundColor = 'green';
});
div.addEventListener('mouseout', (event) => {
    div.style.backgroundColor = 'white';
});



div.addEventListener('contextmenu', (event) => {
    div.style.backgroundColor = 'blue';
});