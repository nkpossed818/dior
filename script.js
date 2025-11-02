document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    let isPlaying = false; 

    // --- 1. Configuração do Autoplay e Play/Pause ---
    
    // Tentativa de Autoplay (Mutado)
    // Usamos um pequeno atraso para garantir que o DOM esteja totalmente pronto
    setTimeout(() => {
        audio.play()
            .then(() => {
                // Sucesso: música iniciou (mutada)
                isPlaying = true;
                playButton.textContent = 'PAUSE'; 
                audio.muted = true; // Força o mudo inicial
            })
            .catch(error => {
                // Falha: Autoplay bloqueado.
                console.log('Autoplay blocked. User must click to start.');
                isPlaying = false;
                playButton.textContent = 'SONNE';
            });
    }, 500); // Atraso de 500ms

    // Lógica do botão Play/Pause
    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = 'SONNE';
            isPlaying = false;
        } else {
            // Se o usuário clicar, desmutamos e garantimos o play!
            audio.muted = false; 
            audio.play();
            playButton.textContent = 'PAUSE';
            isPlaying = true;
        }
    }
    
    // Adiciona o listener APÓS a tentativa de autoplay (para evitar duplicação)
    playButton.addEventListener('click', togglePlayPause);


    // --- 2. Configuração da Sidebar (Com correção de posição) ---
    
    // Inicia a sidebar fora da tela
    sidebar.style.left = '-300px'; 
    sidebar.style.transition = 'left 0.5s'; // Garante a transição suave

    menuIcon.addEventListener('click', () => {
        sidebar.style.left = '0'; // Abre
    });

    closeBtn.addEventListener('click', () => {
        sidebar.style.left = '-300px'; // Fecha
    });
    
    // Fecha a sidebar ao clicar em um link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                sidebar.style.left = '-300px'; 
            }, 300);
        });
    });
});
