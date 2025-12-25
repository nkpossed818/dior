const membersData = {
    'terror': { name: 'TERROR', role: 'FUNDADOR', img: 'LINK_AQUI', desc: 'Fundador Dior.', link: '#' },
    'vianna': { name: 'VIANNA', role: 'FUNDADOR', img: 'LINK_AQUI', desc: 'Fundador Dior.', link: '#' },
    'nk': { name: 'NK', role: 'DONO', img: 'LINK_AQUI', desc: 'Dono Dior.', link: '#' },
    'richard': { name: 'RICHARD', role: 'SUB DONO', img: 'LINK_AQUI', desc: 'Sub Dono.', link: '#' },
    'sod3ad': { name: 'SOD3AD', role: 'ADMIN', img: 'LINK_AQUI', desc: 'Admin Dior.', link: '#' },
    'vitin': { name: 'VITIN', role: 'ADMIN', img: 'LINK_AQUI', desc: 'Admin Dior.', link: '#' },
    'julimau': { name: 'JULIMAU', role: 'ADMIN', img: 'LINK_AQUI', desc: 'Admin Dior.', link: '#' },
    'wrld': { name: 'WRLD', role: 'ADMIN', img: 'LINK_AQUI', desc: 'Admin Dior.', link: '#' },
    'maverick': { name: 'MAVERICK', role: 'ADMIN', img: 'LINK_AQUI', desc: 'Admin Dior.', link: '#' },
    'klaus': { name: 'KLAUS', role: 'ADMIN', img: 'LINK_AQUI', desc: 'Admin Dior.', link: '#' }
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
