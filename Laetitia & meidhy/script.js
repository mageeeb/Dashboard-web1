/* =========================
           NAVBAR CLIQUABLE
        ========================= */

$(".navLink").click(function () {
  
    /*Active le lien*/

  $(".navLink").removeClass("activeNav");

  $(this).addClass("activNav");

  /*Récupère la page*/

  let page = $(this).data("page");

  /*Cache toutes les pages*/

  $(".page").removeClass("activePage").hide();

  /*Affiche la page cliquée*/

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
        top: "70px",
      },
      1000,
    )

    .animate(
      {
        top: "30px",
      },
      1000,
    );

  $(".c2")
    .animate(
      {
        right: "100px",
      },
      1000,
    )

    .animate(
      {
        right: "260px",
      },
      1000,
    );

  $(".c3")
    .animate(
      {
        left: "120px",
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

/* =========================
           Dashboard 
        ========================= */
$(document).ready(function () {
  //dark mode
  $("#btnDark").click(function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      $(this).text("☀️ Light Mode");
    } else {
      $(this).text("🌙 Dark Mode");
    }
  });

  //menu toggle
  $("#btnMenu").click(function () {
    $("#menu").slideToggle(500);
  });

  // animations carte
  $(".carte button").click(function () {
    $(this).animate({ top: "-20px" }, 300).animate({ top: "0px" }, 300);
  });

  // animation box 1

  $("#btn1").click(function () {
    $("#box1")
      .animate({ left: "200px" }, 1000)
      .animate({ top: "200px" }, 1000, function () {
        $(this).css("background-color", "brown");
      })
      .animate({ left: "0px" }, 1000)
      .animate({ top: "0px" }, 1000);
  });

  // box 2
  $("#box2").click(function () {
    $(this).animate({ borderRadius: "50%" }, 1000);
  });

  // Box3
  $("#box3").click(function () {
    $(this).animate({ left: "100px" }, 1000);
  });

  // Box4

  let box4Running = false;

  function box4Loop() {
    if (!box4Running) return;
    $("#box4")
      .animate({ left: "200px" }, 1500)
      .animate({ left: "0px" }, 1500, function () {
        box4Loop();
      });
  }

  $("#box4").click(function () {
    if (!box4Running) {
      box4Running = true;
      $(this).addClass("spinning");
      box4Loop();
    } else {
      box4Running = false;
      $(this).stop(true, false);
      $(this).removeClass("spinning");
    }
  });

  // stop

  $("#btn2").click(function () {
    $("#box1, #box2, #box3, #box4").stop(true, false);
  });

  // animation galerie

  $("#btn3").click(function () {
    $("#galerie").slideUp(1000);
  });
  $("#btn4").click(function () {
    $("#galerie").slideDown(1000);
  });

  // animation notif
  $("#btnNotif").click(function () {
    $("#notification").slideDown(500, function () {
      setTimeout(function () {
        $("#notification").slideUp(500);
      }, 2000);
    });
  });

  // disabled/enabled

  $("#btnD").click(function () {
    $("#message").attr("disabled", "disabled");
  });
  $("#btnE").click(function () {
    $("#message").removeAttr("disabled");
  });
});
