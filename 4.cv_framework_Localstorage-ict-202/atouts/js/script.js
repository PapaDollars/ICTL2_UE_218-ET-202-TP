// var inputNom = document.getElementById("inputNom");
// var validerNoms = document.getElementById("valideNom")  ;

// function input(){
//     inputNom.style.display = "block";
//     valideNom.style.display = "block";
// }
// function validerNom(){
//     // changeNom//inputNom
//     localStorage.setItem("strong_nom",inputNom.value);
//     loc
//     inputNom.style.display = "none";
//     valideNom.style.display = "none";
// } 

//change image
document.querySelector("#myfile").addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        localStorage.setItem("recent_image",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});
document.addEventListener("DOMContentLoaded", ()=>{
    const recentImageDataUrl = localStorage.getItem("recent_image");
    if(recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src",recentImageDataUrl);
    }
});



// side right
{
    cv = 
    [
        {
            "h3_diplomes" : "DIPLOME",
            "h41_diplomes" : "Collège Moderne de la Bénoué",
            "li1_diplomes" : "2020 : Baccalauréat TI",
            "li2_diplomes" : "2019 : Probatoire TI",
            "li3_diplomes" : "2017 : BEPC",
            "h42_diplomes" : "Ecole annexe poumpoumré 3",
            "li4_diplomes" : "2012 : CEP"
        } ,
        {
            "h3_formations" : "FORMATION",
            "h4_formations" : "<u>ICT4D</u>        oct. 2021 - présent",
            "p_formations" : "ICT4D (Informatique and Communication Tecnology for Development), université <br>Yaoundé 1 - niveau 2"
        },
        {
            "h3_experiences" : "EXPERIENCE PROFESSIONNELLE",
            "h4_experiences" : "<u>Conception site web</u>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp août 2019- sept. 2019",
            "p1_experiences" : "DANWE DJASSAM JEAN PIERRE, Chef de Centre Informatique, GAROUJA",
            "p2_experiences" : "Centre National de Développement Informatique (CENADI) "
        },
        {
            "h3_competences" : "COMPETENCES",
            "li1_competences" : "Mise en place d'un site Web",
            "li2_competences" : "Secrétariat bureautique (Office, Excel, PowerPoint)",
            "li3_competences" : "Maintenance des ordinateurs",
            "li4_competences" : "Informatisation des systêmes",
            "li5_competences" : "Prestation de service",
            "li6_competences" : "Infographie multiméia"
        },
        {
            "h3_logiciels" : "LOGICIELS ET SE",
            "li1_logiciels" : "Abode photoshop",
            "li2_logiciels" : "Affinity Designer",
            "li3_logiciels" : "Corel draw",
            "li4_logiciels" : "GitHub Desktop",
            "li5_logiciels" : "MS office",
            "li6_logiciels" : "Windows"
        },
        {
            "copyright" : "Copyright @ 2022 Papa_dollar$ | tous droits réservés"
        },
        {
            "strong_nom" : "IYA BOULAMDI DANIEL"
        }
    ]
}

    var set = JSON.stringify(cv);
        localStorage.setItem("diplomes",set);

    var getCV = localStorage.getItem("diplomes");
    var get = JSON.parse(getCV);
    
    if(get != null){
    //diplome
        document.getElementById("h3_diplome").innerHTML += `${get[0].h3_diplomes}`;
        document.getElementById("h41_diplome").innerHTML += `${get[0].h41_diplomes}`;
        document.getElementById("li1_diplome").innerHTML += `${get[0].li1_diplomes}`;
        document.getElementById("li2_diplome").innerHTML += `${get[0].li2_diplomes}`;
        document.getElementById("li3_diplome").innerHTML += `${get[0].li3_diplomes}`;
        document.getElementById("h42_diplome").innerHTML += `${get[0].h42_diplomes}`;
        document.getElementById("li4_diplome").innerHTML += `${get[0].li4_diplomes}`;
    //formation
        document.getElementById("h3_formation").innerHTML += `${get[1].h3_formations}`;
        document.getElementById("h4_formation").innerHTML += `${get[1].h4_formations}`;
        document.getElementById("p_formation").innerHTML += `${get[1].p_formations}`;
    //experience
        document.getElementById("h3_experience").innerHTML += `${get[2].h3_experiences}`;
        document.getElementById("h4_experience").innerHTML += `${get[2].h4_experiences}`;
        document.getElementById("p1_experience").innerHTML += `${get[2].p1_experiences}`;
        document.getElementById("p2_experience").innerHTML += `${get[2].p2_experiences}`;
    //competence
        document.getElementById("h3_competence").innerHTML += `${get[3].h3_competences}`;
        document.getElementById("li1_competence").innerHTML += `${get[3].li1_competences}`;
        document.getElementById("li2_competence").innerHTML += `${get[3].li2_competences}`;
        document.getElementById("li3_competence").innerHTML += `${get[3].li3_competences}`;
        document.getElementById("li4_competence").innerHTML += `${get[3].li4_competences}`;
        document.getElementById("li5_competence").innerHTML += `${get[3].li5_competences}`;
        document.getElementById("li6_competence").innerHTML += `${get[3].li6_competences}`;
    //LOGICIELS ET SE
        document.getElementById("h3_logiciel").innerHTML += `${get[4].h3_logiciels}`;
        document.getElementById("li1_logiciel").innerHTML += `${get[4].li1_logiciels}`;
        document.getElementById("li2_logiciel").innerHTML += `${get[4].li2_logiciels}`;
        document.getElementById("li3_logiciel").innerHTML += `${get[4].li3_logiciels}`;
        document.getElementById("li4_logiciel").innerHTML += `${get[4].li4_logiciels}`;
        document.getElementById("li5_logiciel").innerHTML += `${get[4].li5_logiciels}`;
        document.getElementById("li6_logiciel").innerHTML += `${get[4].li6_logiciels}`;
    //copyright
        document.getElementById("copyright").innerHTML += `${get[5].copyright}`;
    //info personnels
    document.getElementById("changeNom").innerHTML += `${get[6].strong_nom}`;

    }else
        alert("diplome est vide dans le localStorage");
