 $(".navbar-toggler").click(function () {
                $(".mobile-navbar-drawer").toggleClass("is-active");
                $("body").toggleClass("is-active");
                $(this).toggleClass("is-active");
            });
            $(".close-drawer-btn").click(function () {
                $(".mobile-navbar-drawer").removeClass("is-active");
                $(".navbar-toggler").removeClass("is-active, show");
                $("body").removeClass("is-active");
                $(".inner-navbar-nav-drawer").removeClass("is-active");
            });
            $(".mobile-navbar-drawer .drawer-navbar-nav li .nav-link").click(function () {
                $(this).siblings().addClass("is-active");
            });
            $(".back-drawer-btn").click(function () {
                $(this).parent().parent().removeClass("is-active");
            });
            document.addEventListener("DOMContentLoaded", function () {
                const dropdowns = document.querySelectorAll(".navbar-nav .dropdown");
                const overlay = document.querySelector(".dropoverlay");
                dropdowns.forEach((dropdown) => {
                    dropdown.addEventListener("mouseenter", () => {
                        overlay.classList.add("active");
                    });
                    dropdown.addEventListener("mouseleave", () => {
                        overlay.classList.remove("active");
                    });
                });
            });