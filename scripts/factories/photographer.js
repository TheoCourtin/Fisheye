function photographerFactory(data) {
  const { name, id, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/photographers_id_photos/${portrait}`;
  //const picture = `assets/photographers/${portrait}`;
  
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

    console.log(url);

    return article;
  }
  return { id, getUserCardDOM };  
}
//return { name, id, picture, city, country, tagline, price, getUserCardDOM };
