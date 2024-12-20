document.addEventListener('DOMContentLoaded', () => {
  if ((!localStorage.getItem('cookieConsent')) || (localStorage.getItem('cookieConsent') != "true")) {
    showCookieModal();
  }


});

function showCookieModal() {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'cookie-modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'cookie-modal';
  modal.innerHTML = `
    <p>This site may use cookies or other local storage for vital functionality, such as saving decks. By continuing to use this site, you agree to this.</p>
    <button id="cookieModalOk">OK</button>
  `;
  
  document.body.appendChild(modalOverlay);
  document.body.appendChild(modal);
  
  document.getElementById('cookieModalOk').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    document.body.removeChild(modal);
    document.body.removeChild(modalOverlay);
  });
}
