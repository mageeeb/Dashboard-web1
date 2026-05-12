

/* =========================
   NAVBAR CLIQUABLE
========================= */

$(".navLink").click(function(){

    /*
        Active le lien
    */

    $(".navLink").removeClass("activeNav");

    $(this).addClass("activeNav");


    /*
        Récupère la page
    */

    let page = $(this).data("page");


    /*
        Cache toutes les pages
    */

    $(".page")
    .removeClass("activePage")
    .hide();


    /*
        Affiche la page cliquée
    */

    $("#" + page)

    .fadeIn(500)

    .addClass("activePage");

});


/* =========================
   TOGGLE MENU
========================= */

$("#toggleMenu").click(function(){

    $(".sidebar").animate({width:"toggle"},500);

});


/* =========================
   COUNTERS ANIMÉS
========================= */

$(".counter").each(function(){

    let target = $(this).data("");

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

    $("")

    .animate({
        top:""
    },1000)

    .animate({
        top:""
    },1000);


    $(".c2")

    .animate({
        right:""
    },1000)

    .animate({
        right:""
    },1000);


    $(".c3")

    .animate({
        left:""
    },1000)

    .animate({
        left:""
    },1000);

},2000);

