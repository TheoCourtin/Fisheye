
async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json

  return fetch("data/photographers.json")
    .then((res) => res.json())
    .then((json) => json);
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  //console.log(photographers);
  displayData(photographers);
}

init();


