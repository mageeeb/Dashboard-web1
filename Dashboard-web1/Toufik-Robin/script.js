      /* =========================
   NAVBAR CLIQUABLE
========================= */

      $(".navLink").click(function () {
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

        $(".page").removeClass("activePage").hide();

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

      $("#toggleMenu").click(function () {
        $(".sidebar").animate(
          {
            width: "toggle",
          },
          500,
        );
      });

      /* =========================
   COUNTERS ANIMÉS
========================= */

      $(".counter").each(function () {
        let target = $(this).data("target");

        let counter = $(this);

        $({ countNum: 0 }).animate(
          {
            countNum: target,
          },

          {
            duration: 2000,

            easing: "swing",

            step: function () {
              counter.text(Math.floor(this.countNum));
            },

            complete: function () {
              counter.text(this.countNum);
            },
          },
        );
      });

      /* =========================
   HOME DYNAMIQUE
========================= */

      setInterval(function () {
        $(".c1")
          .animate(
            {
              top: "60px",
            },
            1000,
          )

          .animate(
            {
              top: "20px",
            },
            1000,
          );

        $(".c2")
          .animate(
            {
              right: "250px",
            },
            1000,
          )

          .animate(
            {
              right: "180px",
            },
            1000,
          );

        $(".c3")
          .animate(
            {
              left: "100px",
            },
            1000,
          )

          .animate(
            {
              left: "40px",
            },
            1000,
          );
      }, 2000);

// DARKMODE //
$(".dark-mode-js").on("click", function () {
    $("body").toggleClass("bodyDarkMode");
});


$("#btn-disable").click(function () {
    $("#champ").attr("disabled", "disabled");
});

$("#btn-enable").click(function () {
    $("#champ").removeAttr("disabled");
});

/* DASHBOARD */

$(".carte").click(function () {
    $(this).animate({ bottom: "10px" }, 750)
           .animate({ bottom: "0px" }, 750);
});


$("#box1").click(function () {
    $("#box1").animate({ left: "200px" });
    $("#box1").animate({ top: "200px" }, function () {
        $("#box1").css({ background: "yellow" });
        $("#box1").animate({ left: "0px" });
        $("#box1").animate({ top: "0px" });
    });
});


$("#box2").click(function () {
    $("#box2").animate({ borderRadius: "50%" });
});


$("#box3").click(function () {
    $("#box3").animate({ left: "20px" });
});


$("#box4").click(function () {
    $("#box4").animate({ rotate: "+=360deg" });
});


$("#btn-p").click(function () {
    $("#paragraphe").slideDown(2000);
    setTimeout(function () {
        $("#paragraphe").slideUp(2000);
    }, 2000);
});



// CONTROL // 

$("#btn-lancer").click(function () {
    $("#box1, #box2, #box3, #box4").trigger("click");
});

$("#btn-stop").click(function () {
    $("#box1, #box2, #box3, #box4").stop(true, false);
});

$("#btn-masquer").click(function () {
    $("#galerie").slideUp(400);
});

$("#btn-afficher").click(function () {
    $("#galerie").slideDown(400);
});