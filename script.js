
document.addEventListener("DOMContentLoaded", startVises);


function startVises(){

    document.querySelector(".hamburger").addEventListener("click", () =>{
         document.querySelector(".hamburger").classList.toggle("is-active");

 document.querySelector(".drop_down_mobil").classList.toggle("hidden");
    })

    scollLogo();

}

function scollLogo(){
    $(window).on('scroll', function(){

    if($(window).scrollTop()){
        $('#web_nav').addClass('black')
    }

    else{
        $('#web_nav').removeClass('black')
    }


                 })
}



