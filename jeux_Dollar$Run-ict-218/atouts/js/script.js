//sauter

var prsn_saute = document.querySelector(".prsn_saute");

function sauter() {
    if (prsn_saute.classList != "animation") {
        prsn_saute.classList.add("animation");
    }
    setTimeout(function() {
        prsn_saute.classList.remove("animation");
    }, 2500)
}