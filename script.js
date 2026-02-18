const membersData = {
    'terror': { name: 'Terror', role: '#drc', img: 'https://i.postimg.cc/cJCKJZyd/IMG-20251225-204124-829.jpg', desc: 'silentium est initium insaniae.', link: 'https://t.me/nachtkrieg' },
    'vianna': { name: 'Vianna', role: '#drc', img: 'https://i.postimg.cc/Kvmc5GK8/IMG-20251225-195322-595.jpg', desc: 'Lealdade ao rei', link: 'https://t.me/atoinfracional' },
    'nk': { name: 'nk', role: '#drc', img: 'https://i.postimg.cc/QNnyxSpS/IMG-20251225-192923-071.jpg', desc: 'Jesus is king', link: 'https://t.me/santificam' },
    'sod3ad': { name: 'Sod3ad', role: '#drc', img: 'https://i.postimg.cc/nLrB2zTQ/IMG-20260116-004753-821.jpg', desc: 'ㅤ', link: 'https://t.me/duslog' },
    'vitin': { name: 'Vitin', role: '#drc', img: 'https://i.postimg.cc/NfwCP5mX/IMG-20260218-170456-226.jpg', desc: 'ㅤ', link: 'https://t.me/torturava' },
    'cobra': { name: 'Cobra', role: '#drc', img: 'https://i.postimg.cc/g2rLH0wd/IMG-20260218-155524-749.jpg', desc: 'يا إلهي جون', link: 'https://t.me/omegacarbonn' },
    'skype': { name: 'Skype', role: '#drc', img: 'https://i.postimg.cc/28gcD64W/IMG-20251225-203028-263.jpg', desc: '.', link: 'https://t.me/diorczar' },
    'wlrd': { name: 'Wlrd', role: '#drc', img: 'https://i.postimg.cc/K8CZdPNM/IMG-20260218-165509-448.jpg', desc: 'osint, csint & forensics nerd', link: 'https://t.me/lover5224047' },
    'arthur': { name: 'Arthur', role: '#drc', img: 'https://i.postimg.cc/FH55RVMN/IMG-20251225-211845-873.jpg', desc: 'O caos é a matriz da criação.', link: 'https://t.me/ameacar'},
    'bey': { name: 'Bey', role: '#drc', img: 'https://i.postimg.cc/hPQspBN5/IMG-20251225-203155-756.jpg', desc: 'osint', link: 'https://t.me/pcrsc'},
    'meliodas': { name: 'Meliodas', role: '#drc', img: 'https://i.postimg.cc/bvq6YM3v/IMG-20260218-165325-175.jpg', desc: 'Seu pecado; meu julgamento.', link: 'https://t.me/sacrificacao'},
    'klaus': { name: 'Klaus', role: '#drc', img: 'https://i.postimg.cc/TwjQjqS2/IMG-20251225-195012-114.jpg', desc: 'Conhecereis a verdade e a verdade vos libertará.', link: 'https://t.me/sequestrado' }
};

function startSite() {
    const audio = document.getElementById('background-audio');
    const screen = document.getElementById('enter-screen');
    if (audio) { audio.muted = false; audio.play(); }
    if (screen) { screen.style.opacity = '0'; setTimeout(() => screen.style.display = 'none', 800); }
}

function openModal(key) {
    // Convertemos o key para minúsculo para garantir que 'Cobra' e 'cobra' funcionem
    const data = membersData[key.toLowerCase()];
    if (data) {
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-name').innerText = data.name + " | " + data.role;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-link').href = data.link;
        document.getElementById('modal-member').style.display = 'flex';
    }
}

function closeModal() { document.getElementById('modal-member').style.display = 'none'; }

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playBtn = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    // Lógica do Player
    if (playBtn && audio) {
        playBtn.onclick = () => {
            audio.muted = false;
            if (audio.paused) { audio.play(); playBtn.innerText = 'PAUSE'; }
            else { audio.pause(); playBtn.innerText = 'Play'; }
        };
    }

    // Menu Lateral
    if (menuIcon) menuIcon.onclick = () => sidebar.style.width = '250px';
    if (closeBtn) closeBtn.onclick = () => sidebar.style.width = '0';
    window.onclick = (e) => { if (e.target.id === 'modal-member') closeModal(); };

    // --- CARROSSEL ---
    const slider = document.getElementById('slider');
    const currentTxt = document.getElementById('current');
    const totalFotos = 18;

    if (slider) {
        for (let i = 1; i <= totalFotos; i++) {
            const img = document.createElement('img');
            img.src = `img/foto${i}.webp`;
            img.alt = `Dior Photo ${i}`;
            if (i > 1) img.loading = 'lazy';
            slider.appendChild(img);
        }

        slider.addEventListener('scroll', () => {
            const index = Math.round(slider.scrollLeft / slider.offsetWidth);
            currentTxt.innerText = index + 1;
        });
    }
});
