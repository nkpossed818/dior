document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    // --- 1. Configuração do Autoplay e Sincronização do Player de Mídia ---
    
    if (audio) {
        // Garante que o Autoplay seja tentado e permaneça mutado inicialmente
        audio.muted = true;
        audio.play().catch(error => {
             console.log('Autoplay blocked. User must click on player or button.');
        });
        
        // Sincroniza o botão SONNE/PAUSE com o estado do player nativo
        audio.onplay = () => { 
            if (playButton) playButton.textContent = 'PAUSE'; 
            audio.muted = false; // A primeira interação de play do usuário desmuta o áudio
        };
        audio.onpause = () => { 
            if (playButton) playButton.textContent = 'SONNE'; 
        };
        
        // Sincroniza a label inicial do botão se a música iniciar (mutada)
        if (!audio.paused) {
             if (playButton) playButton.textContent = 'PAUSE';
        }
    }

    // --- 2. Lógica do Botão SONNE/PAUSE ---
    if (playButton) {
        playButton.addEventListener('click', () => {
            if (!audio) return;
            
            audio.muted = false; // Garante que a primeira interação remove o mudo
            
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    }

    // --- 3. Configuração da Sidebar ---

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
