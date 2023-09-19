const heroSection = document.querySelector('.hero');
const footerSection = document.querySelector('.footer');
const header = document.querySelector('header');

const observer = new IntersectionObserver( (entries) => {
  const ent = entries[0];
  ent.isIntersecting === false ? header.classList.add('fixed') :  header.classList.remove('fixed');
})

observer.observe(heroSection);
observer.observe(footerSection);
