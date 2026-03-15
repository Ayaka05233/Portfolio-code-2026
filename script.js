const navbar = document.getElementById('navbar')

function openSidebar() {
    navbar.classList.add('show')
}

function closeSidebar(){
    navbar.classList.remove('show')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fadein').forEach(el => {
  observer.observe(el);
});