$(document).ready(function () {

    function bindScroll(from, to) {
        from.addEventListener('click', () => {
            to.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => to.focus(), 1000);
        });
    }

    // scroll to top 
    let toTopBtn = document.getElementById("btn-back-to-top");

    // When user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            toTopBtn.style.display = "block";
            toTopBtn.style.bottom = "20px";

        } else {
            toTopBtn.style.bottom = "-100px";
        }
    }

    toTopBtn.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function toggleBurgerShow() {
        $('.navigation').toggleClass(" navigation-hidden")
    }

    $('#burgerMenuBtn').click(function (e) {
        toggleBurgerShow()
    })


    // scroll to section

    document.querySelectorAll('.header-link').forEach((item, index) => {
        bindScroll(item, $('section')[index + 1])
    })
    document.querySelectorAll('.header-mob-link').forEach((item, index) => {
        bindScroll(item, $('section')[index + 1])
    })
})