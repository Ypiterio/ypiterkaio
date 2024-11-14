document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("section, header");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("fade-in");
      }, index * 300); 
    });
  });
  