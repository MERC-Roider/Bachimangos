<script>
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

const video = document.querySelector('.hero-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔇' : '🔊';
  muteBtn.setAttribute('aria-label', video.muted ? 'Activar sonido' : 'Silenciar');
});
  </script>