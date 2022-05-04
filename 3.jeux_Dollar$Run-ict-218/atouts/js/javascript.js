//arriere plan

(function($) {
    setInterval(function() {
        $(".arriere_plan ul li:first-child").animate({
            "margin-left": -1396
        }, 1396, function() {
            $(this).css("margin-left", 0).appendTo(".arriere_plan ul");
        });
    }, 6000);
})(jQuery);

//chrono

setTimeout(() => {
    $(document).ready(function() {
        var secondes = 0;
        tempsID = setInterval(chrono, 100);
        chrono()

    });
}, 5000)

function chrono() {
    secondes += 1;
    $("#temps").html("Temps : " + secondes);
}

//courir

Pathimg = new Array;
p0 = new Image;
p0.src = './atouts/images/c1.png';
Pathimg[0] = p0.src;
p1 = new Image;
p1.src = './atouts/images/c2.png';
Pathimg[1] = p1.src;
p2 = new Image;
p2.src = './atouts/images/c3.png';
Pathimg[2] = p2.src;

secondes = 0;
b = 0;

var audio_C = new Audio('./atouts/audio/audio_c.mp3');

setTimeout(cour, 4000)

function courir() {
    document.write('<img src="./atouts/images/c1.png" width="150" border="0" alt="personnage" name="defile" />');
}

function cour() {
    if (b == 3) {
        b = 0;
    }

    document.defile.src = Pathimg[b];
    tempo5 = setTimeout("cour()", 150);
    audio_C.play();
    b++;
}

//sauter

var prsn_saute = document.querySelector(".prsn_saute");
var prsn_cour = document.querySelector(".prsn_cour");
var audio_S = new Audio('./atouts/audio/audio_s.mp3');

function sauter() {


    if (prsn_saute.classList != "animation") {
        prsn_saute.classList.add("animation");
        prsn_cour.style.display = "none";
        prsn_saute.style.display = "block";
        audio_S.play();
    }
    setTimeout(function() {
        prsn_saute.classList.remove("animation");
        prsn_cour.style.display = "block";
        prsn_saute.style.display = "none";
        audio_S.pause();
    }, 1000)
}

//accroupi

var prsn_accroupi = document.querySelector(".prsn_accroupi");
var audio_A = new Audio('./atouts/audio/audio_a.mp3');

function accroupi() {
    if (prsn_accroupi.classList != "animations") {
        prsn_accroupi.classList.add("animations");
        prsn_cour.style.display = "none";
        prsn_accroupi.style.display = "block";
        audio_A.play();
    }
    setTimeout(function() {
        prsn_accroupi.classList.remove("animations");
        prsn_cour.style.display = "block";
        prsn_accroupi.style.display = "none";
        audio_A.pause();
    }, 1500)
}
//pertes

// var obstaclesBas = document.querySelector(".obstaclesBas");
// var obstaclesHaut = document.querySelector(".obstaclesHaut");

// var perdu = setInterval(function() {

//     var personC = PerseInt(window.getComputedStyle(prsn_cour).getPropertyValue("top"));
//     var obsBas = PerseInt(window.getComputedStyle(obstaclesBas).getPropertyValue("left"));

//     if (obsBas < 20 && obsBas > 0 && personC >= 130) {
//         obstaclesBas.style.animate = "none";
//         alert("Ohh lala... Vous Avez perdus !");
//     }
// })