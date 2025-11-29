document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    // --- 1. LÓGICA DE AUTOPLAY (MÁXIMA AGRESSIVIDADE) ---
    
    if (audio) {
        // 1. Garante que o áudio esteja MUDO. ESSENCIAL para tentar o Autoplay.
        audio.muted = true;
        
        // 2. Tenta forçar o início da reprodução no carregamento (método padrão)
        audio.play().then(() => {
            // Sucesso
            console.log('Autoplay iniciado com sucesso (mutado).');
            if (playButton) playButton.textContent = 'PAUSE'; 
        }).catch(error => {
             console.log('Tentativa 1 falhou: Autoplay bloqueado.');
        });

        // 3. Tenta forçar o play com base na INTERAÇÃO do usuário na página (qualquer lugar)
        // Isso cobre o bloqueio de autoplay e garante que a música comece no primeiro toque/clique.
        document.body.addEventListener('click', function() {
            if (audio.paused) {
                audio.muted = true; // Mantém o mudo até o play button ser clicado
                audio.play().catch(error => {
                    // Se falhar aqui, é um bloqueio muito rígido.
                });
            }
        }, { once: true }); // Só dispara no PRIMEIRO clique do usuário em qualquer lugar

        // 4. Sincroniza o botão se o play/pause for clicado no player nativo
        audio.onplay = () => { 
            if (playButton) playButton.textContent = 'PAUSE'; 
            audio.muted = false; // Desmuta se o usuário interagir
        };
        audio.onpause = () => { 
            if (playButton) playButton.textContent = 'SONNE'; 
        };
    }

    // --- 2. Lógica do Botão SONNE/PAUSE (Primeira interação do usuário) ---
    if (playButton) {
        playButton.addEventListener('click', () => {
            if (!audio) return;
            
            // ESSENCIAL: Garante que o áudio não está mais mutado após
