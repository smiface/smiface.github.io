$(document).ready(function () {
    let toTopBtn = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
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

    // When the user clicks on the button, scroll to the top of the document
    toTopBtn.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // 
    function bindScroll(from, to) {
        from.addEventListener('click', () => {
            to.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => to.focus(), 1000);
        });
    }

    document.querySelectorAll('.header-link').forEach((item, index) => {
        bindScroll(item, $('section')[index + 1])
    })
    document.querySelectorAll('.header-mob-link').forEach((item, index) => {
        bindScroll(item, $('section')[index + 1])
    })

    isBurgerShow = false;

    function toggleBurgerShow() {
        isBurgerShow = !isBurgerShow

        $('.burger').toggleClass(" burgerHidden")
        $('.burger-navigation').toggleClass(" burger-navigation-hidden")
        $('.section-one').toggleClass(" mt-5")
    }

    $(".burger").click(function (e) {
        toggleBurgerShow()
    })
})
