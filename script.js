const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function demoSubmit(formId,statusId,message){const form=document.getElementById(formId);const status=document.getElementById(statusId);form?.addEventListener('submit',e=>{e.preventDefault();status.textContent=message;form.reset();});}
demoSubmit('creatorForm','creatorStatus','Application captured in this demo. Connect this form to your email/CRM before launch.');
demoSubmit('contactForm','contactStatus','Message captured in this demo. Connect this form to your email/CRM before launch.');
