const membersData = {
    'terror': { name: 'Terror', role: '#drc', img: '', desc: 'X', link: 'X' },
    'vianna': { name: 'Vianna', role: '#drc', img: 'https://i.postimg.cc/Kvmc5GK8/IMG-20251225-195322-595.jpg', desc: 'Lealdade ao rei', link: 'https://atoinfracional' },
    'nk': { name: 'nk', role: '#drc', img: 'https://i.postimg.cc/QNnyxSpS/IMG-20251225-192923-071.jpg', desc: 'Jesus is king', link: 'https://t.me/santificam' },
    'richard': { name: 'Richard', role: '#drc', img: 'https://i.postimg.cc/ZKw7DHqN/IMG-20251225-200406-605.jpg', desc: 'Se vires seu amigo se associando com seu inimigo, saiba que você tem dois inimigos: um declarado e um secreto.', link: 'https://diorczar' },
    'sod3ad': { name: 'Sod3ad', role: '#drc', img: 'https://i.postimg.cc/JhD2XXMt/IMG-20251225-200114-905.jpg', desc: 'Demônios que jesus mandou pros porcos, retornou lobo em pele de cordeiro.', link: 'https://t.me/duslog' },
    'vitin': { name: 'Vitin', role: '#drc', img: 'https://i.postimg.cc/JhXWLvy6/IMG-20251225-202254-685.jpg', desc: '— —', link: 'https://t.me/torturava' },
    'julimau': { name: 'Julimau', role: '#drc', img: 'https://i.postimg.cc/28gcD64W/IMG-20251225-203028-263.jpg', desc: '🚀', link: 'https://IPOLRJ' },
    'wrld': { name: 'Wrld', role: '#drc', img: 'https://i.postimg.cc/hPQspBN5/IMG-20251225-203155-756.jpg', desc: 'Since 2018', link: 'https://extorsao' },
    'maverick': { name: 'Maverick', role: '#drc', img: 'https://i.postimg.cc/FKYHJTY2/IMG-20251025-144719-559.jpg', desc: 'Administrador', link: 'https://diorczar' },
    'klaus': { name: 'Klaus', role: '#drc', img: 'https://i.postimg.cc/TwjQjqS2/IMG-20251225-195012-114.jpg', desc: 'Conhecereis a verdade e a verdade vos libertará.', link: 'https://t.me/sequestrado' }
};

function startSite() {
    const audio = document.getElementById('background-audio');
    const screen = document.getElementById('enter-screen');
    if (audio) { audio.muted = false; audio.play(); }
    if (screen) { screen.style.opacity = '0'; setTimeout(() => screen.style.display = 'none', 800); }
}

function openModal(key) {
    const data = membersData[key];
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

    if (playBtn && audio) {
        playBtn.onclick = () => {
            audio.muted = false;
            if (audio.paused) { audio.play(); playBtn.innerText = 'PAUSE'; }
            else { audio.pause(); playBtn.innerText = 'SONNE'; }
        };
    }
    if (menuIcon) menuIcon.onclick = () => sidebar.style.width = '250px';
    if (closeBtn) closeBtn.onclick = () => sidebar.style.width = '0';
    window.onclick = (e) => { if (e.target.id === 'modal-member') closeModal(); };
});
