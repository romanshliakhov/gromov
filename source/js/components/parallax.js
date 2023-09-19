window.onload = function () {
  const parallaxBlock = document.querySelector('.hero');

  if(parallaxBlock) {
    parallaxBlock.addEventListener("mousemove", function(event) {
      const parallaxImage = document.querySelectorAll('.hero__phones');

      parallaxImage.forEach((shift) => {
        const position = shift.getAttribute("value");

        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  }
}





