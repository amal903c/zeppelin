document.addEventListener("DOMContentLoaded", startVises);


function startVises(){

    document.querySelector(".hamburger").addEventListener("click", () =>{
         document.querySelector(".hamburger").classList.toggle("is-active");

 document.querySelector(".drop_down_mobil").classList.toggle("hidden");
    })

}
