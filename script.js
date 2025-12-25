function startSite() {
    const audio = document.getElementById('background-audio');
    const screen = document.getElementById('enter-screen');
    const playBtn = document.getElementById('play-button');

    // Toca a música e tira o mudo
    if (audio) {
        audio.muted = false;
        audio.play();
        if (playBtn) playBtn.textContent = 'PAUSE';
    }

    // Esconde a tela preta
    if (screen) {
        screen.style.opacity = '0';
        setTimeout(() => {
            screen.style.display = 'none';
        }, 800);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    if (playButton && audio) {
        playButton.addEventListener('click', () => {
            audio.muted = false;
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'PAUSE';
            } else {
                audio.pause();
                playButton.textContent = 'SONNE';
            }
        });
    }

    if (menuIcon) { menuIcon.addEventListener('click', () => { sidebar.style.width = '250px'; }); }
    if (closeBtn) { closeBtn.addEventListener('click', () => { sidebar.style.width = '0'; }); }
});
