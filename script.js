document.addEventListener('DOMContentLoaded', () => {
    // 1. Variáveis para o Áudio e Botão
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    
    // 2. Variáveis para o Menu Lateral
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    // Estado inicial: Assume que a música está parada e o botão é 'SONNE'
    let isPlaying = false; 
    
    // Configuração do botão Play/Pause
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            // Se estiver tocando, pausa
            if (audio) { audio.pause(); }
            playButton.textContent = 'SONNE';
        } else {
            // Se estiver pausado, toca
            if (audio) { audio.play(); }
            playButton.textContent = 'PAUSE';
        }
        isPlaying = !isPlaying; // Inverte o estado
    });

    // --- Configuração da Sidebar (Menu Lateral) ---

    // Abrir menu (usa 'width' para animação)
    menuIcon.addEventListener('click', () => {
        if (sidebar) { sidebar.style.width = '250px'; }
    });

    // Fechar menu pelo 'x'
    closeBtn.addEventListener('click', () => {
        if (sidebar) { sidebar.style.width = '0'; }
    });
    
    // Fechar a sidebar ao clicar em um link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            // Garante que o menu feche depois que o clique for processado
            setTimeout(() => {
                if (sidebar) { sidebar.style.width = '0'; }
            }, 300);
        });
    });
});
