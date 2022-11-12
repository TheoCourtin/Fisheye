function photographerFactory(data) {
  const { name, id, portrait, city, country, tagline, price } = data;

  // const picture = `assets/photographers/photographers_id_photos/${portrait}`;
  const picture = `assets/photographers/${portrait}`;
  
  
  //Affichage des photographes
  function getUserCardDOM() {
    const article = document.createElement("article");

    // Création d'un lien a pour regrouper l'img et le title
    article.id = "photographer-" + id;

    //Lien a 
    const url = document.createElement("a");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo de profil de ${name}`);
    img.setAttribute("class", "link-profil-img");

    // const blockImg = document.createElement("div");
    // blockImg.setAttribute("class", "link-profil");    
    

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "link-profil");
    h2.textContent = name;   
    

    // const id = document.createElement( 'id' );
    // article.appendChild(id);

    //const country = document.createElement( 'country' );
    const spanCountry = document.createElement("span");
    spanCountry.textContent = city.concat(",", " ", country);
    

    //const tagline = document.createElement( 'tagline' );
    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;
    

    //const price = document.createElement( 'price' );
    const divPrice = document.createElement("div");
    divPrice.setAttribute("class", "price");
    divPrice.textContent = price + "€/jour";

    
    

    //console.log(id,city,country,tagline,price);

    // L'URL sera cliquable sur les éléments IMG et H2 de la page d'accueil    
    url.href="photographer.html?id=" + id;

    article.appendChild(url);
    url.appendChild(img);
    // url.appendChild(blockImg);
    url.appendChild(h2);
    article.appendChild(spanCountry);
    article.appendChild(pTagline);
    article.appendChild(divPrice);

    //console.log(url);

    return article;
  } 
  
  function getPhotographerProfilDOM() {

    const header = document.querySelector(".photograph-header");
    const newDiv = document.createElement("div");
    header.prepend(newDiv);

    const photographerName = document.createElement("h2");
    newDiv.appendChild(photographerName);
    photographerName.id = "photographer_name";
    photographerName.setAttribute("tabIndex", 0);
    photographerName.setAttribute("aria-label", name);
    photographerName.textContent = name;

    const profilCard = document.createElement("div");
    const profilBtn = document.createElement("div");
    const profilPic = document.createElement("div");
    profilCard.classList = "profil-card";
    profilBtn.classList = "profil-btn";
    profilPic.classList = "profil-img";
    header.prepend(profilCard);
    header.append(profilBtn);
    header.append(profilPic);

    const profilPicture = document.createElement("img");
    profilPicture.id = "profil-picture";
    profilPicture.setAttribute("src", picture);
    profilPicture.setAttribute("alt", name);
    profilPic.appendChild(profilPicture);

    // const Btncontact = document.getElementById("contact");
    // profilBtn.appendChild(Btncontact);

    const profilName = document.createElement("h1");
    profilName.textContent = name;
    profilCard.appendChild(profilName);

    const profilLocation = document.createElement("p");
    profilLocation.textContent = city + ", " + country;
    profilLocation.classList = "profil-location";
    profilCard.appendChild(profilLocation);

    const profilAbout = document.createElement("p");
    profilAbout.textContent = tagline;
    profilAbout.classList = "profil-tagline";
    profilCard.appendChild(profilAbout);

    // const likes = document.querySelector(".profil-like");
    // // likes.textContent = totalLike ;
    // const heart = document.createElement("i");
	  // heart.className = "fas fa-heart";
	  // likes.appendChild(heart);


    const likes = document.querySelector(".profil-like");
    likes.setAttribute("data-id", id);

    const totalLike = document.createElement("span");
    totalLike.className = "total-like";
    totalLike.style.paddingRight = "5px";

    const heart = document.createElement("i");
    heart.className = "fas fa-heart";

    
    likes.appendChild(totalLike);
    likes.appendChild(heart);
  



    const priceDay = document.querySelector(".price-day");
    priceDay.textContent = price + "€ / jour";

    // const contactName = document.getElementById("contact-name");
    // contactName.textContent = name;

    

  }

  return { getUserCardDOM, getPhotographerProfilDOM };
}



// return { name, id, picture, city, country, tagline, price, getUserCardDOM };