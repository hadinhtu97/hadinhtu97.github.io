
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
    // document.getElementById('loading').style.width = 0;
    document.getElementById('loading').style.height = 0;
  }, 3000);

})