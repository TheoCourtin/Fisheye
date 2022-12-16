//Récupération des DOMS elements lightbox
const Lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox-close");
//Recuperation du DOM element des médias associés au photographe
const gallery = document.querySelector(".photographer_gallery");

// Ouverture de la lightbox, paramètres d'entrée le chemin, le titre et l'id du média

function displayLightBoxMedia(src, title, id) {
  const lightboxImg = document.querySelector(".lightbox img");
  const lightboxVideo = document.querySelector(".lightbox video");
  const lightboxTitle = document.querySelector(".lightbox h3");
  const ext = getExtension(src);
  // Traitement différents selon le format image ou video
  if (ext == "jpg") {
    lightboxImg.src = src;
    lightboxVideo.style.display = "none";
    lightboxImg.style.display = "block";
  } else {
    lightboxVideo.src = src;
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "block";
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    lightboxVideo.volume = 0.1;
    lightboxVideo.addEventListener("keydown", (e) => {
      if (e.key === "f" || e.key === "F") {
        lightboxVideo.requestFullscreen();
      }
    });
  }
  lightboxTitle.textContent = title;
  Lightbox.style.display = "block";

  //Initialisation des boutons suivant et précédent

  //Recuperation du DOM element de la fleche droite
  const next = document.querySelector(".fa-chevron-right");

  //Initialisation de l'evenement suivant
  next.addEventListener("click", function (e) {
    nextMedia(id);
  });

  const previous = document.querySelector(".fa-chevron-left");
  previous.addEventListener("click", function (e) {
    previousMedia(id);
  });

  document.addEventListener("keydown", (e) => {
    // console.log(e.ctrlKey);
    // console.log(e.key);
    if (e.code === 37 || e.key === "ArrowLeft") {
      // console.log("Gauche");
      previousMedia(id);
    }

    if (e.code === 39 || e.key === "ArrowRight") {
      console.log("Droite");

      nextMedia(id);
    }

    if (e.key === "Escape" || e.key === "Esc") {
      // console.log("Escape");
      hideLightBox();
    }
  });
}

function nextMedia(mediaId) {
  var nextMediaSrc = "";
  var nextMediaTitle = "";
  var currentMediaSrc = "";
  var currentMediaTitle = "";
  var nextMediaid = "";
  // console.log(mediaId);
  var find = false;
  //Recherche media suivant en commencant le premier element
  for (var i = 0; i < gallery.children.length; i++) {
    //Recuperation DOM element article
    var article = gallery.children[i];
    //Recuperation dans l'article du premier enfant qui est le média
    var media = article.children[0];
    //Recuperation du chemin du média
    var src = media.getAttribute("src");
    //Vérification du type du média pour le titre
    const ext = getExtension(src);
    if (ext == "jpg") {
      var title = media.getAttribute("alt");
    } else {
      var title = media.getAttribute("title");
    }
    //Recuperation de l'id du média
    var dataId = article.getAttribute("data-id");
    // console.log(dataId);
    //Comparaison du média actuel avec l'element courant du tableau
    if (dataId == mediaId) {
      find = true;

      currentMediaSrc = src;
      currentMediaTitle = title;
    } else {
      if (find) {
        nextMediaSrc = src;
        nextMediaTitle = title;
        nextMediaid = dataId;
        break;
      }
    }
  }
  //Si le média suivant a été trouvé on l'affiche
  if (nextMediaid !== "") {
    displayLightBoxMedia(nextMediaSrc, nextMediaTitle, dataId);
  }
  //Sinon on est sur le dernier média donc on reprend le premier média pour boucler
  else {
    var article = gallery.children[0];
    var media = article.children[0];

    var src = media.getAttribute("src");

    const ext = getExtension(src);
    if (ext == "jpg") {
      var title = media.getAttribute("alt");
    } else {
      var title = media.getAttribute("title");
    }

    var dataId = article.getAttribute("data-id");
    displayLightBoxMedia(src, title, dataId);
  }
}

function previousMedia(mediaId) {
  var previousMediaSrc = "";
  var previousMediaTitle = "";
  var currentMediaSrc = "";
  var currentMediaTitle = "";
  var previousMediaid = "";

  var find = false;
  //Recherche media précédent en commencant par le dernier element
  for (var i = gallery.children.length - 1; i >= 0; i--) {
    var article = gallery.children[i];

    var media = article.children[0];

    var src = media.getAttribute("src");
    const ext = getExtension(src);
    if (ext == "jpg") {
      var title = media.getAttribute("alt");
    } else {
      var title = media.getAttribute("title");
    }

    var dataId = article.getAttribute("data-id");

    if (dataId == mediaId) {
      find = true;
      currentMediaSrc = src;
      currentMediaTitle = title;
    } else {
      if (find) {
        previousMediaSrc = src;
        previousMediaTitle = title;
        previousMediaid = dataId;
        break;
      }
    }
  }
  if (previousMediaid !== "") {
    displayLightBoxMedia(previousMediaSrc, previousMediaTitle, dataId);
  } else {
    var article = gallery.children[gallery.children.length - 1];

    var media = article.children[0];
    var src = media.getAttribute("src");
    const ext = getExtension(src);
    if (ext == "jpg") {
      var title = media.getAttribute("alt");
    } else {
      var title = media.getAttribute("title");
    }

    var dataId = article.getAttribute("data-id");
    displayLightBoxMedia(src, title, dataId);
  }
}
// Fermeture de la lightbox
function hideLightBox() {
  Lightbox.style.display = "none";
}

lightboxClose.addEventListener("click", hideLightBox);

// Recupération de l'extension du média
function getExtension(chemin) {
  var regex = /[^.]*$/i;
  var resultats = chemin.match(regex);
  return resultats[0];
}
