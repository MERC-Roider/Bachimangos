const video = document.querySelector('.hero-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔇' : '🔊';
  muteBtn.setAttribute('aria-label', video.muted ? 'Activar sonido' : 'Silenciar');
});
