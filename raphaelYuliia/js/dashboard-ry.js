

/* =========================
   NAVBAR CLIQUABLE
========================= */

$(".").click(function(){

    /*
        Active le lien
    */

    $("")
    .removeClass("");

    $(this)
    .addClass("");


    /*
        Récupère la page
    */

    let page = $(this).data("");


    /*
        Cache toutes les pages
    */

    $("")
    .removeClass("")
    .hide();


    /*
        Affiche la page cliquée
    */

    $("#" + page)

    .fadeIn(500)

    .addClass("");

});


/* =========================
   TOGGLE MENU
========================= */

$("").click(function(){

    $("").animate({

        width:""

    },500);

});


/* =========================
   COUNTERS ANIMÉS
========================= */

$(".counter").each(function(){

    let target = $(this).data("target");

    let counter = $(this);

    $({countNum:0})

    .animate({

        countNum:target

    },

    {

        duration:2000,

        easing:"swing",

        step:function(){

            counter.text(
                Math.floor(this.countNum)
            );

        },

        complete:function(){

            counter.text(this.countNum);

        }

    });

});


/* =========================
   HOME DYNAMIQUE
========================= */

setInterval(function(){

    $(".c1")

    .animate({
        top:"100px"
    },2000)

    .animate({
        top:"50px"
    },2000);


    $(".c2")

    .animate({
        right:"100px"
    },2000)

    .animate({
        right:"200px"
    },2000);


    $(".c3")

    .animate({
        left:"100px"
    },2000)

    .animate({
        left:"200px"
    },2000);

},2000);

