document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".square-div");
    divs.forEach((div) => {
      div.addEventListener("click", function() {
        const img = div.querySelector("img");
        if (img) {
          if (img.style.display === "none") {
            img.style.display = "flex";
          } else {
            img.style.display = "none";
          }
        }
      });
    });
  });
  