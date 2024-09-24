let countdown;
const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timerDisplay');
const audio = new Audio('Alarm_Sound/biozard.mp3');
audio.loop = true;
startButton.addEventListener('click', () => {
    const minutes = parseInt(timeInput.value);
    if (!isNaN(minutes) && minutes > 0) {
        startTimer(minutes);
    }
});

function startTimer(minutes) {
    let time = minutes * 60; // converter minutos em segundos
    clearInterval(countdown); // limpar qualquer contagem anterior
    countdown = setInterval(() => {
        const minutes = Math.floor(time / 60); // calcula os minutos restantes
        const seconds = time % 60; // calcula os segundos restantes
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(countdown);
            alert("Tempo esgotado!");
            console.log('tempo esgotado');
        }
        time--; // diminuir o tempo
    }, 1000); // atualizar a cada segundo
}
