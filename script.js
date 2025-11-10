document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    let isPlaying = false; 

    // --- 1. Configuração do Autoplay (Mutado) ---
    
    if (audio) {
        // Tenta iniciar a reprodução automaticamente e mudo
        audio.play()
            .then(() => {
                // Sucesso: música iniciou (mutada)
                isPlaying = true;
                playButton.textContent = 'PAUSE'; 
                audio.muted = true; // Força o mudo inicial
            })
            .catch(error => {
                // Falha: Autoplay bloqueado. Inicia em estado pausado.
                console.log('Autoplay blocked. User must click to start.');
                isPlaying = false;
                playButton.textContent = 'SONNE';
            });
    }

    // --- 2. Lógica do Play/Pause/Alternar ---

    function togglePlayPause() {
        if (isPlaying) {
            // Se estiver tocando (mutado ou não), pausa.
            if (audio) { audio.pause(); }
            playButton.textContent = 'SONNE';
            isPlaying = false;
        } else {
            // Se estiver pausado, toca e REMOVE o mudo.
            if (audio) { 
                audio.muted = false; 
                audio.play();
            }
            playButton.textContent = 'PAUSE';
            isPlaying = true;
        }
    }
    
    // O botão sempre alternará entre PAUSE e SONNE
    if (playButton) {
        playButton.addEventListener('click', togglePlayPause);
    }


    // --- 3. Configuração da Sidebar (Consertada com 'width') ---

    // Abrir menu
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            if (sidebar) { sidebar.style.width = '250px'; }
        });
    }

    // Fechar menu pelo 'x'
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (sidebar) { sidebar.style.width = '0'; }
        });
    }
    
    // Fechar a sidebar ao clicar em um link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                if (sidebar) { sidebar.style.width = '0'; }
            }, 300);
        });
    });
});
