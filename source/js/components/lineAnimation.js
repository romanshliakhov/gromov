const joinSection = document.querySelector('.join');

const observerJoin = new IntersectionObserver( (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      drawSVG();
      observerJoin.unobserve(entry.target);
    }
  });
})

observerJoin.observe(joinSection);

function drawSVG(){
  const joinLine = document.querySelector('.join__line svg');

  const linePath = joinLine.querySelector('.path');
  linePath.style.animation = "dash-join 5s linear forwards";
}
