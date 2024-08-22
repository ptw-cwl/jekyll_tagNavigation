window.addEventListener('load', () => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const ptwcwl = document.querySelector('ptw-cwl');
    ptwcwl.style.marginTop = `${nav.offsetHeight}px`;
    ptwcwl.style.marginBottom = `${footer.offsetHeight}px`;
});