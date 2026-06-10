

/* =========================
   NAVBAR CLIQUABLE
========================= */

$(".navLink").click(function(){

    /*
        Active le lien
    */

    $(".navLink")
    .removeClass("activeNav");

    $(this)
    .addClass("activeNav");


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

    $(".sidebar").animate({

        width:"toggle"

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



// DARK MODE
$(".dark-mode-js").on("click", function () {
  $("body").toggleClass("bodyDarkMode");
});
// -------------------
// MENU

// -------------------
// CARDS
$(".card-01-js").on("click", function () {
  $(this)
    .animate({ bottom: "20px", opacity: 0.6 }, 700)
    .animate({ bottom: "0", opacity: 1 }, 400, "swing");
});

$(".card-02-js").on("click", function () {
  $(this).html('<img class="img" src="https://www.horilla.com/wp-content/uploads/2024/04/what-are-the-features-and-advantages-of-jquery.jpg">'
    )
    $("img").fadeTo(3000,1);
});

let deg = 0;
$(".card-03-js").on("click", function () {
  $(this)
    .css({
      transform: `rotate(${(deg += 360)}deg)`,
      backgroundColor: "#1b9a72",
    })
    .animate({ left: "100px" }, 250)
    .animate({ left: "0px" }, 250, function () {
      $(this).css("backgroundColor", "#ffffff");
    });
});

// -------------------

// CONTROLS
// select animation
$(".box1, .box2, .box3, .box4").click(function () {
  $(".box1, .box2, .box3, .box4").removeClass("active");
  $(this).addClass("active");
});

// play the selected animation
$("#lancer").click(function () {
  let activeBox = $(".active");

  if (activeBox.hasClass("box1")) {
    activeBox.animate({ left: "100px" })
    .animate({ top: "100px" }, function () {
      $(this).css("backgroundColor", "red");
    })
    .animate({ left: "0px" })
    .animate({ top: "0px" });
  }

  if (activeBox.hasClass("box2")) {
    activeBox.animate({ borderRadius: "50%" });
  }

  if (activeBox.hasClass("box3")) {
    activeBox.animate({ left: "100px" });
  }

  if (activeBox.hasClass("box4")) {
    activeBox.animate({ rotate: "+=360deg" });
  }
});


// stop animation
$("#stop").click(function () {
  $(".box1,.box2,.box3,.box4").stop(true,false);
 });


// clear animation
$("#clear").click(function () {

  // clear positions
  $(".box1,.box3").css({left: "0px", top: "0px"});

  // clear border radius
  $(".box2").css({ borderRadius: "10px"});

  // clear active class
  $(".box1, .box2, .box3, .box4").removeClass("active");
});


// Show animation gallerie
 
 $("#afficher").click(function() {
  $(".animBox").slideDown(600)
 })

// Hide animation gallerie
 $("#masquer").click(function() {
  $(".animBox").slideUp(600)
 })


// NOTIFICATION BTN
$(".btn-notif-js").on("click", function () {
  $(".notification").fadeTo(200,1);

  setTimeout(function () {
    $(".notification").fadeOut(300);
  }, 2000);
});

// Input activate/disable

 $("#masquer").click(function() {
  $(".animBox").slideUp(600)
 })

$("#enableBtn").click(function(){
  $("#inputAnim").removeAttr('disabled')
})

$("#disableBtn").click(function(){
  $("#inputAnim").attr('disabled','disabled')
})

