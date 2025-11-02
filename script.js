document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    let isPlaying = false; 

    // 1. --- Configuração do Autoplay e Play/Pause ---
    
    // Tenta iniciar a reprodução automaticamente e mudo ao carregar
    audio.play()
        .then(() => {
            // Sucesso: música iniciou (mutada)
            isPlaying = true;
            playButton.textContent = 'PAUSE'; 
            audio.muted = true; // Força o mudo inicial
            
            playButton.addEventListener('click', togglePlayPause);
            
        })
        .catch(error => {
            // Falha: Autoplay foi bloqueado (o que é normal)
            console.log('Autoplay blocked. User must click to start.');
            isPlaying = false;
            playButton.textContent = 'SONNE';
            playButton.addEventListener('click', togglePlayPause);
        });

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = 'SONNE';
            isPlaying = false;
        } else {
            // Quando o usuário clica para dar play, removemos o mudo e garantimos o play!
            audio.muted = false; 
            audio.play();
            playButton.textContent = 'PAUSE';
            isPlaying = true;
        }
    }


    // 2. --- Configuração da Sidebar ---
    // Ajustado para usar left (posição) em vez de width para a transição ficar mais suave
    
    // Inicia a sidebar fora da tela
    sidebar.style.width = '250px'; 
    sidebar.style.left = '-300px'; 

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
