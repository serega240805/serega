$(document).ready(function () {
    $('.testimonials__slider').slick({
        slidesToShow: 2,
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        slidesToScroll: 2,
        speed: 1000,
    });
    var accordeonButtons = document.getElementsByClassName("accordeon__button");

    for (var i = 0; i < accordeonButtons.length; i++) {
        var accordeonButton = accordeonButtons[i];

        accordeonButton.addEventListener("click", toggleItems, false);
    }

    function toggleItems() {

        var itemClass = this.className;

        for (var i = 0; i < accordeonButtons.length; i++) {
            accordeonButtons[i].className = "accordeon__button closed";
        }

        var pannels = document.getElementsByClassName("accordeon__panel");
        for (var z = 0; z < pannels.length; z++) {
            pannels[z].style.maxHeight = 0;
        }

        if (itemClass == "accordeon__button closed") {
            this.className = "accordeon__button active";
            var panel = this.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    }
})
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});