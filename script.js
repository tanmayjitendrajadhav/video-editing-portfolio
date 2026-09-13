const cards = document.querySelectorAll('.project, .process-grid > div, .education-card, .tool');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); }
  });
},{threshold:.12});
cards.forEach((el,i)=>{ el.classList.add('reveal'); el.style.transitionDelay = `${Math.min(i*50,250)}ms`; observer.observe(el); });
