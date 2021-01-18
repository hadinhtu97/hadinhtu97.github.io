'use strict';

window.addEventListener('load', () => {

  let coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  setTimeout(() => {
    document.getElementById('loading').style.height = 0;
  }, 3000);

  let btn = document.getElementById('dark-light-btn');
  btn.addEventListener('click', () => {
    setTimeout(() => {
      document.getElementById('loading').style.height = '100%';
    }, 0);
    setTimeout(() => {
      if (btn.checked == true) {
        setMode('Dark');
      } else {
        setMode('Light')
      }
    }, 3000)
    setTimeout(() => {
      document.getElementById('loading').style.height = 0;
    }, 3000);
  })

  const setMode = (mode) => {
    let root = document.querySelector(':root');
    if (mode == 'Light') {
      root.style.setProperty('--body-bg-color', 'white');
      root.style.setProperty('--nav-gradient', 'linear-gradient(45deg, #B4DFDF, #5AA4C7, cyan)');
      root.style.setProperty('--footer-gradient', 'linear-gradient(45deg, yellow, orange, #dd4814)');
      root.style.setProperty('--hr-gradient', 'linear-gradient(45deg, cyan, #dd4814)');
      root.style.setProperty('--nav-link-color', 'white');
      root.style.setProperty('--nav-link-hover-color', 'cyan');
      root.style.setProperty('--footer-text-color', '#5e0080');
      root.style.setProperty('--project-title', 'black');
      root.style.setProperty('--certification-text', 'black');
      root.style.setProperty('--collapsible-bg', 'white');
      root.style.setProperty('--dark-light-text', 'cyan');
      root.style.setProperty('--welcome-image', "url('https://media.giphy.com/media/3osxYuthM9iM6IEIY8/giphy.gif')");
    } else if (mode == 'Dark') {
      root.style.setProperty('--body-bg-color', 'black');
      root.style.setProperty('--nav-gradient', 'linear-gradient(45deg, #c9c6bd, #4f4e4a, black)');
      root.style.setProperty('--footer-gradient', 'linear-gradient(45deg, #c9c6bd, #4f4e4a, black)');
      root.style.setProperty('--hr-gradient', 'linear-gradient(45deg, #c9c6bd, #4f4e4a, black)');
      root.style.setProperty('--nav-link-color', 'cyan');
      root.style.setProperty('--nav-link-hover-color', 'black');
      root.style.setProperty('--footer-text-color', 'black');
      root.style.setProperty('--project-title', 'white');
      root.style.setProperty('--certification-text', 'white');
      root.style.setProperty('--certification-text', 'white');
      root.style.setProperty('--collapsible-bg', 'black');
      root.style.setProperty('--dark-light-text', 'white');
      root.style.setProperty('--welcome-image', "url('https://media.giphy.com/media/RlwF2vFb4y7bDnWvcO/giphy.gif')");
    }
  }

})