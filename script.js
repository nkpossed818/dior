document.addEventListener('DOMContentLoaded', () => {
    // Referências ao Áudio e Player
    const audio = document.getElementById('main-audio'); // ID RENOMEADO
    const playPauseBtn = document.getElementById('play-pause-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeSpan = document.getElementById('current-time');
    const totalTimeSpan = document.getElementById('total-time');
    const playPauseIcon = playPauseBtn.querySelector('i');

    // Referências ao Menu Lateral
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    // ------------------------------------
    // LÓGICA DO PLAYER DE MÚSICA
    // ------------------------------------

    // Função Auxiliar: Converte segundos totais para o formato MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const paddedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
        return `${minutes}:${paddedSeconds}`;
    }

    // 1. Controle de Play/Pause (Ativado no clique)
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    playPauseIcon.className = 'fa-solid fa-pause';
                })
                .catch(error => {
                    console.error("A reprodução foi bloqueada:", error);
                    alert("O navegador exige uma interação mais direta para tocar o som. Tente clicar novamente.");
                });
        } else {
            audio.pause();
            playPauseIcon.className = 'fa-solid fa-play';
        }
    });

    // 2. Evento de Carregamento (Define o tempo total)
    audio.addEventListener('loadedmetadata', () => {
        progressBar.max = audio.duration;
        totalTimeSpan.textContent = formatTime(audio.duration);
    });
    
    // 3. Atualização da Barra e do Tempo (Enquanto toca)
    audio.addEventListener('timeupdate', () => {
        progressBar.value = audio.currentTime;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
    });

    // 4. Controle da Barra de Progresso (Permite que o usuário arraste)
    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });

    // 5. Quando a música termina (Se 'loop' estiver desativado)
    audio.addEventListener('ended', () => {
        playPauseIcon.className = 'fa-solid fa-play';
        audio.currentTime = 0; // Volta para o início
    });


    // ------------------------------------
    // LÓGICA DA SIDEBAR (Mantida)
    // ------------------------------------

    // Abrir menu
    menuIcon.addEventListener('click', () => {
        sidebar.style.width = '250px'; 
    });

    // Fechar menu pelo 'x'
    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0'; 
    });

    // Fechar a sidebar ao clicar em um link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                sidebar.style.width = '0'; 
            }, 300);
        });
    });
});
