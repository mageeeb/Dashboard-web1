        /* =========================
            NAVBAR CLIQUABLE
        ========================= */

$(".navLink").click(function () {
            /* ======================
                Active le lien
            ======================= */

  $(".navLink").removeClass("activeNav");

  $(this).addClass("activeNav");

              /* ===================
                Récupère la page
              ====================== */

  let page = $(this).data("page");

            /* ==========================
                Cache toutes les pages
            ============================ */

  $(".page").removeClass("activePage").hide();

            /* ============================
                Affiche la page cliquée
            ============================= */

  $("#" + page)
    .fadeIn(500)
    .addClass("activePage");

  if (page === "profilePage") {
    $("#profilePage").css("display", "flex");
  }
});

        /* =========================
                TOGGLE MENU
        ========================= */

$("#toggleMenu").click(function () {
  $(".sidebar").slideToggle(300);
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
    $("#messageAttr").attr("disabled", "disabled");
  });
  $("#btnE").click(function () {
    $("#messageAttr").removeAttr("disabled");
  });

            /* =========================
            FORMULAIRE REGEX (page Profil)
            ========================= */

  let registeredUser = null;

  const REGEX = {
    username: /^[a-zA-Z0-9_-]{3,16}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]).{8,}$/,
  };

  $(".tab").on("click", function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    let form = $(this).data("form");
    $("#signupForm, #loginForm").hide();
    $("#" + form).fadeIn(300);
    $(".flash").slideUp(200);
  });

  $("#signup-username").on("keyup", function () {
    let valeur = $(this).val();
    let field = $("#f-username");

    field.removeClass("ok error");

    if (valeur.length === 0) {
      field.find(".hint").text("3 à 16 caractères : lettres, chiffres, _ ou -");
    } else if (REGEX.username.test(valeur)) {
      field.addClass("ok");
      field.find(".hint").text("Nom valide");
    } else {
      field.addClass("error");
      if (valeur.length < 3) {
        field.find(".hint").text("Trop court, (3 caractères minimum)");
      } else if (valeur.length > 16) {
        field.find(".hint").text("Trop long, (16 caractères maximum)");
      } else {
        field.find(".hint").text("Caractères interdits - lettres/chiffres/_/- uniquement");
      }
    }
  });

  $("#signup-email").on("keyup", function () {
    let valeur = $(this).val();
    let field = $("#f-email");
    let result = REGEX.email.test(valeur);

    field.removeClass("ok error");
    if (result === true) {
      field.find(".hint").text("Email valide");
      field.addClass("ok");
    } else {
      field.find(".hint").text("Format invalide - Ex : prenom@domaine.com");
      field.addClass("error");
    }
    if (valeur.length === 0) {
      field.removeClass("ok error");
      field.find(".hint").text("Format email standard requis");
    }
  });

  $("#signup-password").on("keyup", function () {
    let valeur = $(this).val();

    const min = /[a-z]/;
    const maj = /[A-Z]/;
    const numb = /[0-9]/;
    const cara = /[^a-zA-Z0-9]/;

    let goal = 0;

    if (valeur.length >= 8) goal += 1;
    if (min.test(valeur) && maj.test(valeur)) goal += 1;
    if (numb.test(valeur)) goal += 1;
    if (cara.test(valeur)) goal += 1;

    $(".strength span").each(function (i) {
      $(this).removeClass("faible moyen fort");
      if (i < goal) {
        if (goal <= 1) {
          $(this).addClass("faible");
        } else if (goal <= 3) {
          $(this).addClass("moyen");
        } else {
          $(this).addClass("fort");
        }
      }
    });

    $("#f-password").removeClass("ok error");
    if (REGEX.password.test(valeur)) {
      $("#f-password").addClass("ok");
      $("#f-password .hint").text("Mot de passe valide");
    } else {
      $("#f-password").addClass("error");
    }
  });

  $("#signupBtn").on("click", function () {
    const username = $("#signup-username").val().trim();
    const email = $("#signup-email").val().trim();
    const password = $("#signup-password").val();

    const errors = [];

    if (!REGEX.username.test(username)) errors.push("Nom d'utilisateur invalide.");
    if (!REGEX.email.test(email)) errors.push("Adresse mail invalide.");
    if (!REGEX.password.test(password)) errors.push("Mot de passe invalide.");

    if (errors.length > 0) {
      $(this).addClass("shake");
      setTimeout(() => {
        $(this).removeClass("shake");
      }, 600);

      $("#signupFlash")
        .removeClass("ok")
        .addClass("err")
        .html(errors.join("<br>"))
        .hide()
        .slideDown(300);
    } else {
      registeredUser = { username, email, password };

      $("#signupFlash")
        .removeClass("err")
        .addClass("ok")
        .text("Votre inscription est validée, Connexion en cours")
        .hide()
        .slideDown(300);
      setTimeout(() => {
        doLogin();
      }, 800);
    }
  });

  $("#loginBtn").on("click", function () {
    const email = $("#login-email").val().trim();
    const password = $("#login-password").val();
    const errors = [];

    if (!registeredUser) {
      $("#loginFlash")
        .removeClass("ok")
        .addClass("err")
        .text("Aucun compte trouvé, inscris-toi d'abord.")
        .hide()
        .slideDown(300);
      return;
    }

    if (!REGEX.email.test(email)) errors.push("Adresse mail invalide.");

    if (errors.length > 0) {
      $(this).addClass("shake");
      setTimeout(() => $(this).removeClass("shake"), 600);
      $("#loginFlash")
        .removeClass("ok")
        .addClass("err")
        .html(errors.join("<br>"))
        .hide()
        .slideDown(300);
      return;
    }

    if (email === registeredUser.email && password === registeredUser.password) {
      $("#loginFlash")
        .removeClass("err")
        .addClass("ok")
        .text("Connexion en cours...")
        .hide()
        .slideDown(300);
      setTimeout(() => doLogin(), 800);
    } else {
      $(this).addClass("shake");
      setTimeout(() => $(this).removeClass("shake"), 600);
      $("#loginFlash")
        .removeClass("ok")
        .addClass("err")
        .text("Email ou mot de passe incorrect.")
        .hide()
        .slideDown(300);
    }
  });

  /* ============================================================
     CONNEXION / DÉCONNEXION — logique fournie, ne pas modifier
  ============================================================ */

  function doLogin() {
    $("#authBox").fadeOut(400, function () {
      const msg =
        "Bienvenue <strong>" +
        registeredUser.username +
        "</strong> ! Tu es connecté·e.";
      $("#profileWelcomeMsg").html(msg);
      $("#profileWelcome").fadeIn(400);
    });
  }

  $("#logoutBtn").on("click", function () {
    $("#profileWelcome").fadeOut(400, function () {
      $("#login-email, #login-password").val("");
      $(".flash").hide();
      $(".tab").first().trigger("click"); // reset sur l'onglet inscription
      $("#authBox").fadeIn(400);
    });
  });

});