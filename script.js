const gif = document.querySelector('.giffy');
const yesBtn = document.querySelector('.Sí');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');
const body = document.querySelector('body');

function Sí() {
    text.style.display = 'block';
    buttons.style.display = 'none';
    question.textContent = "¡Ahuevo! Es una cita nena <3";
    gif.src = 'assets/flores.jpg';
    createHearts(100);
}

var phrase = ['¿Cómo que NO?', '¿De verdad NO quieres?(ভ_ ভ)', '¿PORQUÉ NOOO?ರ╭╮ರ', 'YAAAAA!(╥_╥) NO juegues conmigo ಠ_ಠ)', 'Te daré una última oportunidad :))', 'Shi(„ᵕᴗᵕ„)♡ NO hay de otra'];
var gifs = ['assets/como.jpg', 'assets/verdad.jpg', 'assets/esquina.jpg', 'assets/yaaaa.jpg', 'assets/indignado.jpg', 'assets/shi.jpg'];
var noCount = 0;

function no() {
    if (noCount != 6) {
        noBtn.style.position = 'absolute';
        var newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        var newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
        noBtn.textContent = phrase[noCount];
        gif.src = gifs[noCount];
        noCount++;
    } else {
        Sí();
    }
}

function createHearts(numbers) {
    for (var i = 0; i < numbers; i++) {
        var heart = document.createElement("img");
        heart.src = 'assets/Heart_corazón.svg.png';
        heart.alt = "Heart";
        heart.classList.add("heart");
        heart.classList.add("heart" + (i % 3 + 1)); // Assigning different animation classes
        var size = Math.floor(Math.random() * 51) + 50; // Random size between 50 and 100
        heart.style.width = size + "px";
        heart.style.height = size + "px";
        heart.style.left = Math.random() * (window.innerWidth - size) + "px";
        heart.style.top = Math.random() * (window.innerHeight - size) + "px";
        document.querySelector('body').appendChild(heart);
        setTimeout(function() {
            heart.remove();
        }, 1500); // Remove the heart after 1.5 seconds
    }
}

// Asegúrate de que el HTML tenga los siguientes elementos:
// <img class="giffy" src="" alt="Gif de reacción">
// <button class="Sí" onclick="Sí()">Sí</button>
// <button class="no" onclick="no()">No</button>
// <div class="question"></div>
// <div class="buttons"></div>
// <div class="text" style="display:none;"></div>

document.addEventListener('DOMContentLoaded', (event) => {
    gif = document.querySelector('.giffy');
    noBtn = document.querySelector('.no');
    no();
});
