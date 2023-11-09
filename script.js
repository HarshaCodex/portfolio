document.addEventListener('DOMContentLoaded', function() {
    var navbarBrand = document.querySelector('.navbar-brand');

    navbarBrand.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior:"smooth"});
        return false;
    });
});