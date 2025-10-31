document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = "TOCAR MÚSICA";
        } else {
            // Tenta dar play e captura um erro se o navegador bloquear (raro após um clique)
            audio.play().then(() => {
                playButton.textContent = "PAUSAR MÚSICA";
                isPlaying = true;
            }).catch(error => {
                console.error("Erro ao tentar tocar a música:", error);
                playButton.textContent = "ERRO: Tente novamente";
            });
        }
    });
});
