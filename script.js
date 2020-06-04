document.addEventListener("DOMContentLoaded", startVises);


function startVises() {

    document.querySelector(".a").addEventListener("click", () => {

        document.querySelector(".aa").classList.toggle("hide");
        document.querySelector(".a").classList.toggle("valgt");

    })

    document.querySelector(".b").addEventListener("click", () => {

        document.querySelector(".bb").classList.toggle("hide");
        document.querySelector(".b").classList.toggle("valgt");

    })

    document.querySelector(".c").addEventListener("click", () => {

        document.querySelector(".cc").classList.toggle("hide");
        document.querySelector(".c").classList.toggle("valgt");

    })

    document.querySelector(".d").addEventListener("click", () => {

        document.querySelector(".dd").classList.toggle("hide");
        document.querySelector(".d").classList.toggle("valgt");

    })


    document.querySelector(".e").addEventListener("click", () => {

        document.querySelector(".ee").classList.toggle("hide");
        document.querySelector(".e").classList.toggle("valgt");

    })



    document.querySelector(".hamburger").addEventListener("click", () => {
        console.log("jeg har klikket på brugermenu")
        document.querySelector(".hamburger").classList.toggle("is-active");

        document.querySelector(".drop_down_mobil").classList.toggle("hidden");
    })



    scollLogo();

}

function scollLogo() {
    $(window).on('scroll', function () {

        if ($(window).scrollTop()) {
            $('#web_nav').addClass('black')
        } else {
            $('#web_nav').removeClass('black')
        }


    })
}
