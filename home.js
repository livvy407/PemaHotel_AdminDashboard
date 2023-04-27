const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
}) 

closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
})

const btn1 = document.getElementById('btn4');
const out1 = document.getElementById('output1');

btn4.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const txt1 = document.getElementById('tbuster')

    out1.innerHTML = txt1.value;

    txt1.value = '';
});

const btn2 = document.getElementById('btn5');
const out2 = document.getElementById('output2');

btn5.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const txt2 = document.getElementById('tbuster1')

    out2.innerHTML = txt2.value;

    txt2.value = '';
});

const btn3 = document.getElementById('btn6');
const out3 = document.getElementById('output3');

btn6.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const txt3 = document.getElementById('tbuster2')

    out3.innerHTML = txt3.value;

    txt3.value = '';
});





