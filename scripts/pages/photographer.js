//Mettre le code JavaScript lié à la page photographer.html

// Récupération de l'ID dans l'url
function getPhotographerId() {
  return new URL(location.href).searchParams.get("id");
}
const photographerId = getPhotographerId();

console.log(photographerId);

// async function displayProfile(photographers) {
//   photographers.forEach((photographer) => {
//     if (photographer.id == photographerId) {
//       const photographersData = photographerFactory(photographer);
//       photographersData.getPhotographerProfilDOM();
//     }
//   });
// }
