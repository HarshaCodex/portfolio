document.addEventListener('DOMContentLoaded', function() {
    var navbarBrand = document.querySelector('.navbar-brand');

    navbarBrand.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior:"smooth"});
        return false;
    });
});

$(document).ready(function() {
    $(".navbar-brand, .nav-link[href='#home']").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $(".nav-link").on('click', function() {
        $(".nav-item").removeClass("active");
        $(this).parent(".nav-item").addClass("active");
    });
});