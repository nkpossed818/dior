document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------
    // Funcionalidade de Áudio (Música)
    // ----------------------------------------------------------------
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');

    if (playButton) {
        playButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playButton.textContent = 'PAUSAR MÚSICA';
                }).catch(error => {
                    console.error("Erro ao tentar tocar o áudio:", error);
                    alert("O navegador bloqueou a reprodução automática. Tente de novo.");
                });
            } else {
                audio.pause();
                playButton.textContent = 'SONNE';
            }
        });
    }

    // ----------------------------------------------------------------
    // Funcionalidade do Menu Lateral (Sidebar)
    // ----------------------------------------------------------------
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const closeBtn = document.getElementById('close-btn');

    // Função para abrir o menu
    const openNav = () => {
        sidebar.style.width = "250px"; 
        // Move o conteúdo principal para o lado, se necessário
        // document.querySelector('.container').style.marginLeft = "250px"; 
    };

    // Função para fechar o menu
    const closeNav = () => {
        sidebar.style.width = "0";
        // document.querySelector('.container').style.marginLeft= "0";
    };

    // Adiciona ouvintes de evento aos botões
    if (menuIcon) {
        menuIcon.addEventListener('click', openNav);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }
});
