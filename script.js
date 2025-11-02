document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    let isPlaying = false;

    // --- 1. Configuração do Play/Pause (Sem Autoplay) ---

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

    // --- 2. Configuração da Sidebar ---

    // Inicialização da Sidebar (garantindo que esteja fora da tela no CSS)
    
    // Abrir menu
    menuIcon.addEventListener('click', () => {
        sidebar.style.left = '0';
    });

    // Fechar menu pelo 'x'
    closeBtn.addEventListener('click', () => {
        sidebar.style.left = '-300px'; 
    });
    
    // Fechar a sidebar ao clicar em um link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            // Pequeno atraso para a navegação começar antes de fechar a sidebar
            setTimeout(() => {
                sidebar.style.left = '-300px'; 
            }, 300);
        });
    });
});
