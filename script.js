const membersData = {
    'terror': { name: 'Terror', role: '#drc', img: 'https://i.postimg.cc/cJCKJZyd/IMG-20251225-204124-829.jpg', desc: 'silentium est initium insaniae.', link: 'https://t.me/nachtkrieg' },
    'vianna': { name: 'Vianna', role: '#drc', img: 'https://i.postimg.cc/Kvmc5GK8/IMG-20251225-195322-595.jpg', desc: 'Lealdade ao rei', link: 'https://t.me/atoinfracional' },
    'nk': { name: 'nk', role: '#drc', img: 'https://i.postimg.cc/QNnyxSpS/IMG-20251225-192923-071.jpg', desc: 'Jesus is king', link: 'https://t.me/santificam' },
    'richard': { name: 'Richard', role: '#drc', img: 'https://i.postimg.cc/ZKw7DHqN/IMG-20251225-200406-605.jpg', desc: 'Se vires seu amigo se associando com seu inimigo, saiba que você tem dois inimigos: um declarado e um secreto.', link: 'https://t.me/diorczar' },
    'sod3ad': { name: 'Sod3ad', role: '#drc', img: 'https://i.postimg.cc/JhD2XXMt/IMG-20251225-200114-905.jpg', desc: 'ㅤ', link: 'https://t.me/duslog' },
    'vitin': { name: 'Vitin', role: '#drc', img: 'https://i.postimg.cc/JhXWLvy6/IMG-20251225-202254-685.jpg', desc: 'ㅤ', link: 'https://t.me/torturava' },
    'Trash': { name: 'Trash', role: '#drc', img: 'https://i.postimg.cc/LX2vN16w/IMG-20260114-203408-683.jpg', desc: 'Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós? - Romanos - 8:31 ', link: 'https://t.me/exterminei' },
    'julimau': { name: 'Julimau', role: '#drc', img: 'https://i.postimg.cc/28gcD64W/IMG-20251225-203028-263.jpg', desc: '🚀', link: 'https://t.me/IPOLRJ' },
    'wrld': { name: 'Wrld', role: '#drc', img: 'https://i.postimg.cc/hPQspBN5/IMG-20251225-203155-756.jpg', desc: 'Since 2018', link: 'https://t.me/extorsao' },
    'arthur': { name: 'Arthur', role: '#drc', img: 'https://i.postimg.cc/FH55RVMN/IMG-20251225-211845-873.jpg', desc: 'O caos é a matriz da criação.', link: 'https://t.me/ameacar'},
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
