
document.addEventListener('keydown', (event) => {
    let key = event.key.toUpperCase();
    let keyElement;

    if (event.code === "Space") {
        keyElement = document.getElementById('key-Space');
        event.preventDefault();
    } else if (event.key === "Escape") {
        keyElement = document.getElementById('key-Escape');
    } else if (event.code === "Backslash") {
        keyElement = document.getElementById("key-oneandhalf")
    } else if (event.code === "Enter") {
        keyElement = document.getElementById('key-Enter');
    } else if (event.code === "Backspace") {
        keyElement = document.getElementById('key-Backspace');
    } else if (event.code === "CapsLock") {
        keyElement = document.getElementById('key-CapsLock');
    } else if (event.code === "Tab") {
        keyElement = document.getElementById('key-Tab');
        event.preventDefault();
    } else if (event.code.startsWith("Shift")) {
        keyElement = document.getElementById('key-ShiftLeft');
    } else if (event.code.startsWith("Control")) {
        keyElement = document.getElementById('key-ControlLeft');
    } else if (event.code.startsWith("Alt")) {
        keyElement = document.getElementById('key-MetaLeft');
        event.preventDefault();
    } else if (event.code.startsWith("Meta")) {
        keyElement = document.getElementById('key-AltLeft');
        event.preventDefault();
    } else if (event.code.startsWith("Arrow")) {
        keyElement = document.getElementById(`key-${event.code}`);
        event.preventDefault();
    } else {
        keyElement = document.getElementById(`key-${key}`);
    }

    if (keyElement) {
        keyElement.classList.add('key--active');
    }
    playSound();
});

document.addEventListener('keyup', (event) => {
    let key = event.key.toUpperCase();
    let keyElement;

    if (event.code === "Space") {
        keyElement = document.getElementById('key-Space');
        event.preventDefault();
    } else if (event.key === "Escape") {
        keyElement = document.getElementById('key-Escape');
    } else if (event.code === "Enter") {
        keyElement = document.getElementById('key-Enter');
    } else if (event.code === "Backslash") {
        keyElement = document.getElementById("key-oneandhalf")
    } else if (event.code === "Backspace") {
        keyElement = document.getElementById('key-Backspace');
    } else if (event.code === "CapsLock") {
        keyElement = document.getElementById('key-CapsLock');
    } else if (event.code === "Tab") {
        keyElement = document.getElementById('key-Tab');
        event.preventDefault();
    } else if (event.code.startsWith("Shift")) {
        keyElement = document.getElementById('key-ShiftLeft');
    } else if (event.code.startsWith("Control")) {
        keyElement = document.getElementById('key-ControlLeft');
    } else if (event.code.startsWith("Alt")) {
        keyElement = document.getElementById('key-MetaLeft');
        event.preventDefault();
    } else if (event.code.startsWith("Meta")) {
        keyElement = document.getElementById('key-AltLeft');
        event.preventDefault();
    } else if (event.code.startsWith("Arrow")) {
        keyElement = document.getElementById(`key-${event.code}`);
        event.preventDefault();
    } else {
        keyElement = document.getElementById(`key-${key}`);
        event.preventDefault();
    }

    if (keyElement) {
        keyElement.classList.remove('key--active');
    }
});

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;

fetch('assets/keyboard-sound.mp3')
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => {
        audioBuffer = buffer;
    });

function playSound() {
    let source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);
}