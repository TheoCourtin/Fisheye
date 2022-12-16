function getPhotographerId() {
  return new URL(location.href).searchParams.get("id");
}
const photographerId = getPhotographerId();
console.log(photographerId);

async function getPhotographers() {
  return fetch("data/photographers.json")
    .then((res) => res.json())
    .then((json) => json);
}

async function getMedias() {
  return fetch("data/photographers.json")
    .then((res) => res.json())
    .then((json) => json.media);
  // .then((json) => json);
  //.then((json) => console.log(json.media));
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer-header");

  photographers.forEach((photographer) => {
    const photographersData = photographerFactory(photographer);
    //console.log(photographersData);
    //console.log(photographersData);
    photographersData.getPhotographerProfilDOM();
    //console.log(userProfilDOM);
    //photographersSection.appendChild(userProfilDOM);
  });
}

async function displayMedia(medias) {
  const mediaSection = document.querySelector(".photographer_gallery");

  medias.forEach((media) => {
    const mediasData = mediaFactory(media);
    //console.log(mediasData);
    const mediaDOM = mediasData.getMediaCardDOM();
    //console.log(mediaDOM);
    //mediaSection.appendChild(mediaDOM);
    mediaSection.appendChild(mediaDOM);
    //console.log(mediaSection.appendChild(mediaDOM));

    //mediaSection.appendChild(mediaFactory(media))
  });
  const tri = document.getElementById("sort-select");
  tri.addEventListener("change", function (e) {
    if (e.target.value === "popularite") {
      medias.sort(function (a, b) {
        if (a.likes < b.likes) {
          return 1;
        }
        if (a.likes > b.likes) {
          return -1;
        }
        return 0;
      });
      // return b.likes - a.likes;
    }
    if (e.target.value === "date") {
      medias.sort(function (a, b) {
        if (b.date < a.date) {
          return -1;
        }
        if (b.date > a.date) {
          return 1;
        }
        return 0;
      });
      // return a.date - b.date;
    }
    if (e.target.value === "title") {
      medias.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      // return a.title.localeCompare(b.title);
    }
    console.log(medias);
    //console.log(tri);
    document.querySelector(".photographer_gallery").innerHTML = "";
    displayMedia(medias);
  });

  const likes = [];
  for (const element in medias) {
    if (medias[element].photographerId === +getPhotographerId()) {
      likes.push(medias[element]);
    }
  }

  let totalLike = 0;
  likes.forEach((element) => {
    totalLike += parseInt(element.likes, 10);
  });

  document.querySelector(".total-like").textContent = totalLike;
  // console.log(totalLike);

  const clicLikes = document.querySelectorAll(".like");

  // Permet d'ajouter d'un like au coeur et d'augmenter de un le nombre
  clicLikes.forEach((element) => {
    element.addEventListener("click", (e) => {
      manageLikes(element,e);
    });
  });  

  // Permet d'ajouter d'un like au coeur et d'augmenter de un le nombre
  clicLikes.forEach((element) => {
    element.addEventListener("keydown", (e) => {
      if (e.code === 13 || e.key === "Enter")  {
        // console.log("Gauche");
        manageLikes(element,e);
      }
      
      
    });
  });

  function manageLikes(element,e)
  {
    const numberLikes = element.querySelector(".number-like");
    const profilLikes = document.querySelector(".total-like");
    const mediaId = e.target
      .closest("article")
      .querySelector(".gallery-picture")
      .getAttribute("data-id");
    console.log(mediaId);
    const mediaLikes = medias.find((el) => el.id === parseInt(mediaId, 10));
  
    if (mediaLikes.like === "liked") {
      numberLikes.textContent = parseInt(numberLikes.textContent, 10) - 1;
      mediaLikes.likes -= 1;
      mediaLikes.like = "";
      profilLikes.textContent = parseInt(profilLikes.textContent, 10) - 1;
    } else {
      numberLikes.textContent = parseInt(numberLikes.textContent, 10) + 1;
      profilLikes.textContent = parseInt(profilLikes.textContent, 10) + 1;
      mediaLikes.likes += 1;
      mediaLikes.like = "liked";
    }
  } 

}



async function initPhotographers() {
  const { photographers } = await getPhotographers();
  let myPhotographer = photographers.filter(
    (photographer) => photographer.id === +getPhotographerId()
  );
  console.log(myPhotographer);

  displayData(myPhotographer);
  // sortGallery(media);
}

initPhotographers();

async function initMedia() {
  const medias = await getMedias();
  //console.log(medias);

  const myMedia = medias.filter(
    (media) => media.photographerId === +getPhotographerId()
  );
  // console.log(myMedia);
  myMedia.sort(function (a, b) {
    if (a.likes < b.likes) {
      return 1;
    }
    if (a.likes > b.likes) {
      return -1;
    }
    return 0;
  });
  displayMedia(myMedia);  
}

initMedia();
