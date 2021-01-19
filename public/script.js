'use strict';

window.addEventListener('load', () => {

  let certificateBtn = document.getElementsByClassName('certificate-btn');
  let certificateModal = document.getElementsByClassName('certificate-modal');
  let certificateModalClose = document.getElementsByClassName('certificate-modal-close');
  for (let i = 0; i < certificateBtn.length; i++) {
    certificateBtn[i].addEventListener('click', () => {
      certificateModal[i].style.display = 'block';
    })
    certificateModalClose[i].addEventListener('click', () => {
      certificateModal[i].style.display = 'none'
    })
  }

  window.onclick = function (event) {
    for (let i = 0; i < certificateModal.length; i++) {
      if (event.target == certificateModal[i]) {
        certificateModal[i].style.display = 'none'
      }
    }
  }

  setTimeout(() => {
    document.getElementById('loading').style.height = 0;
  }, 1000);
})