/* ================================
   BACK TO TOP BUTTON
================================ */

const topBtn = document.getElementById("topBtn");


/* PAPARKAN BUTTON APABILA USER SCROLL */

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


/* KEMBALI KE BAHAGIAN ATAS */

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ================================
   ANIMASI MENU NAVIGATION
================================ */

const navLinks = document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Navigasi ke: " + link.textContent
        );

    });

});


/* ================================
   HIGHLIGHT MENU SEMASA SCROLL
================================ */

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.style.color = "white";


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color = "#f5c542";

        }

    });

});