function photographerFactory(data) {
  const { name, id, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de profil de ${name}");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);

    //const id = document.createElement( 'id' );
    //article.appendChild(id);

    //const country = document.createElement( 'country' );
    const spanCountry = document.createElement("span");
    spanCountry.textContent = city.concat(",", " ", country);
    article.appendChild(spanCountry);

    //const tagline = document.createElement( 'tagline' );
    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;
    article.appendChild(pTagline);

    //const price = document.createElement( 'price' );
    const divPrice = document.createElement("div");
    divPrice.setAttribute("class", "price");
    divPrice.textContent = price + "€/jour";
    article.appendChild(divPrice);

    //console.log(id,city,country,tagline,price);
    return article;
  }
  return { name, id, picture, city, country, tagline, price, getUserCardDOM };
  // return {  id, getUserCardDOM }
}
