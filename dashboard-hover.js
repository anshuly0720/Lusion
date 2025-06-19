const dashboards = document.querySelector('.hover-dashboards');
const images = document.getElementById('dashboardImages');
const headline = dashboards.closest('.headline');
let hoverTimeout;

dashboards.addEventListener('mouseenter', () => {
  headline.classList.add('dash-hover');
  hoverTimeout = setTimeout(() => {
    images.classList.add('show');
  }, 500);
});
dashboards.addEventListener('mouseleave', () => {
  headline.classList.remove('dash-hover');
  clearTimeout(hoverTimeout);
  images.classList.remove('show');
});
images.addEventListener('mouseenter', () => {
  clearTimeout(hoverTimeout);
  images.classList.add('show');
});
images.addEventListener('mouseleave', () => {
  images.classList.remove('show');
  headline.classList.remove('dash-hover');
}); 