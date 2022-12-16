function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const modalBtn = document.getElementById("contact");
modalBtn.addEventListener("click", displayModal);

const modalCloseBtn = document.getElementById("close_modal");
modalCloseBtn.focus();
modalCloseBtn.addEventListener("click", closeModal);

const form = document.querySelector("#contactForm");

const firstName = document.getElementById("firstName");
firstName.setAttribute("aria-label", "Votre prénom");
firstName.setAttribute("tabindex", 0);
const lastName = document.getElementById("lastName");
lastName.setAttribute("aria-label", "Votre nom de famille");
lastName.setAttribute("tabindex", 0);
const email = document.getElementById("email");
email.setAttribute("aria-label", "Votre email");
email.setAttribute("tabindex", 0);
const msg = document.getElementById("msg");
msg.setAttribute("aria-label", "Votre message");
msg.setAttribute("tabindex", 0);
const regexMail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,63})$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(firstName.value);
  if (firstName.value.trim().length < 2) {
    document.querySelector(".msg_firstName").textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  } else {
    document.querySelector(".msg_firstName").textContent = "";
  }

  // Vérifie si la valeur lastName est inférieur à 2
  console.log(lastName.value);
  if (lastName.value.trim().length < 2) {
    document.querySelector(".msg_lastName").textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  } else {
    document.querySelector(".msg_lastName").textContent = "";
  }

  // Vérifie si la valeur eMail respecte le régex
  console.log(email.value);
  if (!email.value.trim().match(regexMail)) {
    document.querySelector(".msg_email").textContent =
      "Entrez une adresse valide. Exemple : contact@gmail.com";
    return false;
  } else {
    document.querySelector(".msg_email").textContent = "";
  }

  console.log(msg.value);

  closeModal();
  // lauchModalConfirm();
  document.querySelector("#contactForm").reset();
});
