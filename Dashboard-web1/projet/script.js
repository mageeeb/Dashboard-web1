/* ============================================================
   ÉTAT GLOBAL (stocke le compte inscrit en mémoire)
============================================================ */
let registeredUser = null; // { username, email, password }
let isLoggedIn = false;

/* ============================================================
   REGEX — à compléter !
   Référence MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions
============================================================ */
const REGEX = {
  // TODO 1 — Regex username
  // Règle : entre 3 et 16 caractères
  //         uniquement lettres (a-z, A-Z), chiffres, underscore _ ou tiret -
  // Indice : ^ = début, $ = fin, [groupe]{min,max}
  username: /^.{3,16}$/,

  // TODO 2 — Regex email
  // Règle : qqch @ qqch . qqch (au moins 2 lettres pour le domaine)
  // Indice : \. pour un vrai point, + = un ou plusieurs, {2,} = au moins 2
  email: /^[\w.-]+@[\w.-]+\.\w{2,}$/,

  // TODO 3 — Regex password (la plus complexe !)
  // Règle : 8 caractères minimum
  //         au moins 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial
  // Indice : (?=...) = lookahead positif (vérifie sans consommer)
  //          (?=.*[A-Z]) = doit contenir au moins une majuscule quelque part
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]).{8,}$/,
};

/* ============================================================
   TABS — basculer entre Inscription et Connexion
============================================================ */

// TODO 4 — Au clic sur un .tab :
//   1. Retirer la classe "active" de tous les .tab
//   2. Ajouter "active" sur $(this)
//   3. Lire l'attribut data-form avec $(this).data("form")
//   4. Cacher tous les formulaires, afficher le bon avec fadeIn(300)

$(".tab").on("click", function () {
  // Ton code ici ↓
  $(".tab").removeClass("active");
  $(this).addClass("active");
  let form = $(this).data("form");
  $("#signupForm, #loginForm").hide();
  $("#" + form).fadeIn(300);
});

/* ============================================================
   VALIDATION TEMPS RÉEL — username
============================================================ */

// TODO 5 — Sur l'événement "keyup" de #signup-username :
//   - Récupérer la valeur avec .val()
//   - Tester avec REGEX.username.test(valeur)
//   - Si valide → ajouter classe "ok" sur #f-username, message positif dans .hint
//   - Si invalide → ajouter classe "error", message d'erreur précis dans .hint
//   - Penser à .removeClass("ok error") au début pour reset l'état précédent

$("#signup-username").on("keyup", function () {
  // Ton code ici ↓
  let valeur = $(this).val();
  $("#f-username").removeClass("ok error");

  if (REGEX.username.test(valeur)) {
    $("#f-username").addClass("ok");
    $("#f-username .message").text("Username valide");
  } else {
    $("#f-username").addClass("error");
    $("#f-username .message").text(
      "Username invalide (lettres, chiffres, 3-15 caractères)",
    );
  }
});

/* ============================================================
   VALIDATION TEMPS RÉEL — email
============================================================ */

// TODO 6 — Même logique que le username, pour #signup-email
//           Tester avec REGEX.email.test(valeur)

$("#signup-email").on("keyup", function () {
  // Ton code ici ↓
  let valeur = $(this).val();
  $("#f-email").removeClass("ok error");

  if (REGEX.email.test(valeur)) {
    $("#f-email").addClass("ok");
    $("#f-email .message").text("Email valide");
  } else {
    $("#f-email").addClass("error");
    $("#f-email .message").text(
      "Email invalide (Format email standard requis)",
    );
  }
});

/* ============================================================
   VALIDATION TEMPS RÉEL — password + jauge de force
============================================================ */

// TODO 7 — Sur "keyup" de #signup-password :
//   a) Calculer un score de 0 à 4 :
//      +1 si longueur >= 8
//      +1 si contient minuscule ET majuscule
//      +1 si contient un chiffre
//      +1 si contient un caractère spécial
//
//   b) Mettre à jour la jauge .strength span :
//      Utilise .each(function(i){...}) pour boucler sur les 4 spans
//      Si i < score → ajouter la bonne classe (faible / moyen / fort)
//      Sinon retirer toutes les classes
//
//   c) Valider ou invalider le champ avec REGEX.password.test(valeur)

$("#signup-password").on("keyup", function () {
  let valeur = $(this).val();

  const min = /[a-z]/
  const maj = /[A-Z]/
  const numb = /[0-9]/ 
  const cara = /[^a-zA-Z0-9]/

  // Ton code ici ↓
  let goal = 0;
  if (valeur.length >= 8) goal += 1;
  if (min.test(valeur) && maj.test(valeur)) goal += 1;
  if (numb.test(valeur)) goal += 1;
  if (cara.test(valeur)) goal += 1;


$(".strength span").each(function (i) {
  $(this).removeClass("faible moyen fort");
  if (goal <= 1) {
    $(this).addClass("faible");
  } else if (goal > 1 && goal <= 3){
    $(this).addClass("moyen");
  } else {$(this).addClass("fort")};
});

  $("#f-password").removeClass("ok error");
  if (REGEX.password.test(valeur)) {
    $("#f-password").addClass("ok");
    $("#f-password .message").text("Mot de passe valide");
  } else {
    $("#f-password").addClass("error");
    $("#f-password .message").text("Mot de passe invalide");
  }
});

/* ============================================================
   BOUTON INSCRIPTION
============================================================ */

// TODO 8 — Au clic sur #signupBtn :
//   1. Lire les 3 valeurs (username, email, password)
//   2. Tester les 3 regex
//   3. Si erreurs → collecter dans un tableau, shake sur le bouton,
//      afficher dans #signupFlash (classe "err") avec .slideDown(300)
//   4. Si tout OK → stocker dans registeredUser = { username, email, password }
//      Afficher message succès dans #signupFlash (classe "ok")
//      Après 800ms, appeler doLogin()

$("#signupBtn").on("click", function () {
  // Ton code ici ↓
});

/* ============================================================
   BOUTON CONNEXION
============================================================ */

// TODO 9 — Au clic sur #loginBtn :
//   1. Vérifier que registeredUser existe (sinon → message "inscris-toi d'abord")
//   2. Vérifier que l'email est valide (REGEX.email)
//   3. Comparer email + password avec registeredUser.email / .password
//   4. Si OK → appeler doLogin()
//   5. Sinon → shake + flash "err"

$("#loginBtn").on("click", function () {
  // Ton code ici ↓
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
    $("#welcomeMsg").html(msg);
    $("#welcome").fadeIn(400);
  });
}

$("#logoutBtn").on("click", function () {
  $("#welcome").fadeOut(400, function () {
    $("#login-email, #login-password").val("");
    $(".flash").hide();
    $(".tab").first().trigger("click"); // reset sur l'onglet inscription
    $("#authBox").fadeIn(400);
  });
});
