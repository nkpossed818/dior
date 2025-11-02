document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    let isPlaying = false;

    // --- 1. Configuração do Play/Pause ---

    // Define o estado inicial da música se o navegador forçar a pausa (SONNE)
    if (audio.paused) {
        isPlaying = false;
        playButton.textContent = 'SONNE';
    } else {
        isPlaying = true;
        playButton.textContent = 'PAUSE';
    }


    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = 'SONNE';
        } else {
            audio.play();
            playButton.textContent = 'PAUSE';
        }
        isPlaying = !isPlaying;
    });

    // --- 2. Configuração da Sidebar (Usando 'width' para garantir o funcionamento) ---

    // Abrir menu
    menuIcon.addEventListener('click', () => {
        // ✅ CORREÇÃO: Usa 'width' para abrir o menu
        sidebar.style.width = '250px'; 
    });

    // Fechar menu pelo 'x'
    closeBtn.addEventListener('click', () => {
        // ✅ CORREÇÃO: Usa 'width' para fechar o menu
        sidebar.style.width = '0'; 
    });
    
    // Fechar a sidebar ao clicar em um link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                // Fecha após o clique no link
                sidebar.style.width = '0'; 
            }, 300);
        });
    });
});
