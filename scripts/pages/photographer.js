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
    console.log(photographersData);
    //console.log(photographersData);
    photographersData.getPhotographerProfilDOM();
    //console.log(userProfilDOM);
    //photographersSection.appendChild(userProfilDOM);
  });
}

 async function displayMedia(medias)
{
  const mediaSection = document.querySelector(".photographer_gallery");

  
  medias.forEach((media) => {
    const mediasData = mediaFactory(media);
    // console.log(mediaModel);       
    const mediaDOM = mediasData.getMediaCardDOM();    
    mediaSection.appendChild(mediaDOM);
    
    //mediaSection.appendChild(mediaFactory(media))
    

  })
}


async function initPhotographers() {
  
  const { photographers } = await getPhotographers();
  let myPhotographer = photographers.filter((photographer) => photographer.id === +getPhotographerId());
  console.log(myPhotographer);
  
  displayData(myPhotographer);
  
}

initPhotographers();


async function initMedia() {
  
  const  medias  = await getMedias();
 //console.log(medias);

  
  const myMedia = medias.filter((media) => media.photographerId === +getPhotographerId());
  console.log(myMedia);
  
  displayMedia(myMedia);
  //console.log(displayMedia(myMedia));
  
}

initMedia();