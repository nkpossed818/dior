// DADOS DOS MEMBROS (Edite aqui)
const membersData = {
    'nk': {
        name: 'NK',
        role: 'DONO',
        img: 'https://i.postimg.cc/QNnyxSpS/IMG-20251225-192923-071.jpg', 
        desc: 'Trouver un équillibre au milieu du chaos',
        link: 't.me/santificam'
    }
};

function startSite() {
    const audio = document.getElementById('background-audio');
    const screen = document.getElementById('enter-screen');
    const playBtn = document.getElementById('play-button');
    if (audio) { audio.muted = false; audio.play(); if (playBtn) playBtn.textContent = 'PAUSE'; }
    if (screen) { screen.style.opacity = '0'; setTimeout(() => { screen.style.display = 'none'; }, 800); }
}

function openModal(memberKey) {
    const data = membersData[memberKey];
    if (data) {
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-name').innerText = data.name;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-link').href = data.link;
        document.getElementById('modal-member').style.display = 'flex';
    }
}

function closeModal() { document.getElementById('modal-member').style.display = 'none'; }

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    if (playButton && audio) {
        playButton.addEventListener('click', () => {
            audio.muted = false;
            if (audio.paused) { audio.play(); playButton.textContent = 'PAUSE'; } 
            else { audio.pause(); playButton.textContent = 'SONNE'; }
        });
    }
    if (menuIcon) menuIcon.onclick = () => sidebar.style.width = '250px';
    if (closeBtn) closeBtn.onclick = () => sidebar.style.width = '0';
    window.onclick = (event) => { if (event.target == document.getElementById('modal-member')) closeModal(); }
});
