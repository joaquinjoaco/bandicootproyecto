let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none'; (tambien funciona pero es mejor la de abajo)
    spinnerWrapper.parentElement.removeChild(spinnerWrapper)
});