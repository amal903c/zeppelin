let JSONdata_header = [];
let endpoint_header = "http://michelleyoung.dk/kea/zeppelin/wordpress/wp-json/wp/v2/forestilling/53"

let JSONdata_kalender = [];
let endpoint_kalender = "http://michelleyoung.dk/kea/zeppelin/wordpress/wp-json/wp/v2/alle_forestillinge"

// henter måneden
var d = new Date();

//henter måneden i tal
var n = d.getMonth();

console.log(n);

// gør så man kan skrive måneden i navn
var options = {
    month: 'long'
};

//klonen til kalenderen

//template
//var kalenderTemplate = document.querySelector("#kalender_template");
//
////containeren
//var kalenderContainer = document.querySelector("#drop_down_date");



document.addEventListener("DOMContentLoaded", startVises);


function startVises() {
    hentJSON_header();

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

async function hentJSON_header() {
    //henter json data for forestillinger via REST API
    let resspons_header = await fetch(endpoint_header);

    //putter json data ind i det tomme array for forestillinger
    JSONdata_header = await resspons_header.json();


    //henter json data for forestillinger via REST API
    let resspons_kalender = await fetch(endpoint_kalender);

    //putter json data ind i det tomme array for forestillinger
    JSONdata_kalender = await resspons_kalender.json();

    //kalder visForestillinger

    visIdag();
    visKalender(JSONdata_kalender);


}

function visIdag() {
    document.querySelector("#idag_overskrift").textContent = JSONdata_header.overskrift;

    // indsætter datoen på nuværrende forestilling
    // Dato er navnet på field'en i poden
    document.querySelector("#idag_dato").textContent = JSONdata_header.tidspunkt;

    // indsætter billedet på nuværende forestilling
    // Forestilling_billede er navnet på field'en i poden
    document.querySelector("#idag_billede").src = JSONdata_header.forestilling_billede.guid;

    // hvis der er en overskrif, og dermed en forestilling der køre ligenu, vises knapperne
    if (JSONdata_header.overskrift) {
        document.querySelector(".container_knapper").classList.remove("hidden");
    }

    //kommer ind på detaljeside når man klikker på læs mere
    document.querySelector(".readmore_info").addEventListener("click", () => {

        location.href = `klikpaaforestilling_current.html?id=${JSONdata_header.id}`;
    })

    //når man klikker på i dag fjernes hidden på pop_uppen og dermed kommer den til syne
    document.querySelector(".i_dag_knap").addEventListener("click", () => {
        console.log("Jeg har klikker på i dag knappen");
        document.querySelector(".idag_popup_container").classList.remove("hidden")
    })

    //når man klikker på lukkeknappen puttes classen hidden på igen og dermed er den ikke synlig igen
    document.querySelector(".luk_idag").addEventListener("click", () => {
        console.log("Jeg har klikker på luk");
        document.querySelector(".idag_popup_container").classList.add("hidden")
    })

    //gør så man når man klikker på kalender_knappen at pop_uppen kommer til syne
    document.querySelector(".kalender_knap").addEventListener("click", () => {
        console.log("Jeg har klikker på kalender knappen");
        document.querySelector(".kalender_popup_container").classList.remove("hidden")
    })


}

function visKalender(kalenderen) {


    // viser måneden i dansk og i ord
    document.querySelector(".maanede").innerHTML = new Intl.DateTimeFormat('da-DK', options).format(d);
    console.log(d);


    //vælger alle forestillinger
    kalenderen.forEach(forestilling => {

        // hvis spille daten er ligmed 1 og spille månenden er ligmed den månede vi befinder os i
        if (forestilling.spille_dato == 1 && forestilling.spille_maanede == n) {
            document.querySelector(".en_date").classList.remove("unactive");

        }

        if (forestilling.spille_dato == 2 && forestilling.spille_maanede == n) {
            document.querySelector(".to_date").classList.remove("unactive")

        }

        if (forestilling.spille_dato == 3 && forestilling.spille_maanede == n) {
            document.querySelector(".tre_date").classList.remove("unactive")

        }

        if (forestilling.spille_dato == 4 && forestilling.spille_maanede == n) {
            document.querySelector(".fire_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 5 && forestilling.spille_maanede == n) {
            document.querySelector(".fem_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 6 && forestilling.spille_maanede == n) {
            document.querySelector(".seks_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 7 && forestilling.spille_maanede == n) {
            document.querySelector(".syv_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 8 && forestilling.spille_maanede == n) {
            document.querySelector(".otte_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 9 && forestilling.spille_maanede == n) {
            document.querySelector(".ni_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 10 && forestilling.spille_maanede == n) {
            document.querySelector(".ti_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 11 && forestilling.spille_maanede == n) {
            document.querySelector(".elve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 12 && forestilling.spille_maanede == n) {
            document.querySelector(".tolv_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 13 && forestilling.spille_maanede == n) {
            document.querySelector(".tretten_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 14 && forestilling.spille_maanede == n) {
            document.querySelector(".fjorten_date").classList.remove("unactive")
        }

        // hvis spille daten er ligmed 15 og spille månenden er ligmed den månede vi befinder os i
        if (forestilling.spille_dato == 15 && forestilling.spille_maanede == n) {

            //fjerner classen unactive, så den ikke længere vises som en dato hvor der ikke er en forestilling
            document.querySelector(".femten_date").classList.remove("unactive")

            //gør så når man har musen over, kan brugeren se at man kan klikke på elementet
            document.querySelector(".femten_date").style.cursor = "pointer";

            //gør så man kan klikke på datoen
            document.querySelector(".femten_date").addEventListener("click", () => {

                //vælger alle datoer og siger at for hver dato skal den fjerne classen "valgt"
                document.querySelectorAll(".dato").forEach(elm => {
                    elm.classList.remove("valgt");
                    console.log(elm)
                });

                //tilføjer classen valgt til femte dato
                document.querySelector(".femten_date").classList.add("valgt");

                console.log("jeg har klikket på datoen");

                //Fjerner alt indholdet i containeren
                document.querySelector("#drop_down_date").innerHTML = "";

                //laver klonen
                const klonKalender = document.querySelector("#kalender_template").cloneNode(true).content;

                //inde i klonen vælges kalender_overskrift og puttet indholdet fra json ind i.
                klonKalender.querySelector(".kalender_overskrift").textContent = forestilling.titel;

                // inde i klonen vælges tid_kaldener og putter indholdet fra json ind i.
                klonKalender.querySelector(".tid_kalender").textContent = forestilling.tidspunkt;



                //hvis man så klikker på læs mere kommer man ind på en detaljeside
                klonKalender.querySelector(".read_more_kalender").addEventListener("click", () => {
                    console.log("jeg har klikket på læs mere kalender info");

                    location.href = `klikpaaforestilling.html?id=${forestilling.id}`;
                })

                //tager klonen og putter ind i containeren
                document.querySelector("#drop_down_date").appendChild(klonKalender);
            })

        }

        if (forestilling.spille_dato == 16 && forestilling.spille_maanede == n) {
            document.querySelector(".seksten_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 17 && forestilling.spille_maanede == n) {
            document.querySelector(".sytten_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 18 && forestilling.spille_maanede == n) {
            document.querySelector(".atten_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 19 && forestilling.spille_maanede == n) {
            document.querySelector(".nitten_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 20 && forestilling.spille_maanede == n) {
            document.querySelector(".tyve_date").classList.remove("unactive")
        }
        if (forestilling.spille_dato == 21 && forestilling.spille_maanede == n) {
            document.querySelector(".enogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 22 && forestilling.spille_maanede == n) {


            document.querySelector(".toogtyve_date").classList.remove("unactive")

            document.querySelector(".toogtyve_date").style.cursor = "pointer";

            document.querySelector(".toogtyve_date").addEventListener("click", () => {

                document.querySelectorAll(".dato").forEach(elm => {
                    elm.classList.remove("valgt");
                });
                document.querySelector(".toogtyve_date").classList.add("valgt");

                console.log("jeg har klikket på datoen");

                document.querySelector("#drop_down_date").innerHTML = "";

                const klonKalender = document.querySelector("#kalender_template").cloneNode(true).content;

                klonKalender.querySelector(".kalender_overskrift").textContent = forestilling.titel;

                klonKalender.querySelector(".tid_kalender").textContent = forestilling.tidspunkt;



                //hvis man så klikker på læs mere
                klonKalender.querySelector(".read_more_kalender").addEventListener("click", () => {
                    console.log("jeg har klikket på læs mere kalender info");

                    location.href = `klikpaaforestilling.html?id=${forestilling.id}`;
                })

                document.querySelector("#drop_down_date").appendChild(klonKalender);
            })


        }

        if (forestilling.spille_dato == 23 || forestilling.spille_dato_2 == 23 && forestilling.spille_maanede == n) {
            document.querySelector(".treogtyve_date").classList.remove("unactive");

            document.querySelector(".treogtyve_date").style.cursor = "pointer";

            document.querySelector(".treogtyve_date").addEventListener("click", () => {

                document.querySelectorAll(".dato").forEach(elm => {
                    elm.classList.remove("valgt");
                });
                document.querySelector(".treogtyve_date").classList.add("valgt");

                console.log("jeg har klikket på datoen");

                document.querySelector("#drop_down_date").innerHTML = "";

                const klonKalender = document.querySelector("#kalender_template").cloneNode(true).content;

                klonKalender.querySelector(".kalender_overskrift").textContent = forestilling.titel;

                klonKalender.querySelector(".tid_kalender").textContent = forestilling.tidspunkt;



                //hvis man så klikker på læs mere
                klonKalender.querySelector(".read_more_kalender").addEventListener("click", () => {
                    console.log("jeg har klikket på læs mere kalender info");

                    location.href = `klikpaaforestilling.html?id=${forestilling.id}`;
                })

                document.querySelector("#drop_down_date").appendChild(klonKalender);
            })
        }

        if (forestilling.spille_dato == 24 && forestilling.spille_maanede == n) {
            document.querySelector(".fireogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 25 && forestilling.spille_maanede == n) {
            document.querySelector(".femogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 26 && forestilling.spille_maanede == n) {
            document.querySelector(".seksogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 27 && forestilling.spille_maanede == n) {
            document.querySelector(".syvogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 28 && forestilling.spille_maanede == n) {
            document.querySelector(".otteogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 29 && forestilling.spille_maanede == n) {
            document.querySelector(".niogtyve_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 30 && forestilling.spille_maanede == n) {
            document.querySelector(".tredive_date").classList.remove("unactive")
        }

        if (forestilling.spille_dato == 31 && forestilling.spille_maanede == n) {
            document.querySelector(".enogtredive_date").classList.remove("unactive")
        }

        console.log(forestilling.spille_dato);
        console.log(forestilling.spille_maanede);


    })

    document.querySelector(".luk_kalender").addEventListener("click", () => {

        console.log("jeg har klikket på luk knap")
        document.querySelector(".kalender_popup_container").classList.add("hidden");

    })





}
