window.addEventListener('load', () => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const ptwcwl = document.querySelector('ptw-cwl');
    ptwcwl.style.marginTop = `${nav.offsetHeight}px`;
    ptwcwl.style.marginBottom = `${footer.offsetHeight}px`;
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
