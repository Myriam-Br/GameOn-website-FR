function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal(modalId) {
  console.log("modal closed successfully");
  const modalForm = document.getElementById(modalId);
  modalForm.style.display = "none";

}


//form validation

function validate() {

  //element DOM
  var firstName = document.getElementById('first');
  const alertFirstName = document.getElementById('alert-firstname');

  var lastName = document.getElementById('last');
  const alertLastName = document.getElementById('alert-lastname');

  var email = document.getElementById('email'); 
  const alertEmail = document.getElementById('alert-email'); 

  var birthdate = document.getElementById('birthdate');
  const alertBirthdate = document.getElementById('alert-birthdate'); 

  var quantity = document.getElementById('quantity'); 
  const alertQuantity = document.getElementById('alert-quantity'); 

  const locationSelected = document.querySelector('input[name="location"]:checked');
  const alertLocation = document.getElementById('alert-location'); 

  const termesOfServices = document.querySelector('input[id="checkbox1"]:checked');
  const alertTOS = document.getElementById('alert-tos'); 
  
  var sendForm = true;
  
  //regex 
  const emailFilter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const lettersFilter = /^[a-zA-Z]+$/;
  const numbersFilter = /^[0-9]*$/;


  firstName = firstName.value;
  lastName = lastName.value;
  email = email.value;
  birthdate = birthdate.value;
  quantity = quantity.value;
 
//firstname validation
 if( firstName == "") {
  //console.log(" veuillez entrer votre prénom");  
  alertFirstName.innerHTML = "veuillez entrer votre prénom";
  sendForm = false 
 }else if(!firstName.match(lettersFilter)){
  alertFirstName.innerHTML = 'votre prénom ne doit contenir que des lettres';
  sendForm = false 
 } else if(firstName.length < 2) {
  //console.log('votre prénom doit contenir au moins 2 caractère');
  alertFirstName.innerHTML = 'votre prénom doit contenir au moins 2 caractères';
  sendForm = false 
 } else{
   //console.log('prénom valide');
   //console.log(firstName.length);
   alertFirstName.innerHTML = "" 
 }

//lastname validation
 if( lastName == "") {
  //console.log(" veuillez entrer votre nom");  
  alertLastName.innerHTML = "veuillez entrer votre nom"
  sendForm = false 
 }else if(!lastName.match(lettersFilter)){
  alertFirstName.innerHTML = 'votre nom ne doit contenir que des lettres';
  sendForm = false 
 } else if(lastName.length < 2) {
  //console.log('votre nom doit contenir au moins 2 caractère');
  alertLastName.innerHTML = "votre nom doit contenir au moins 2 caractère"
  sendForm = false 
 } else{
   //console.log('nom valide');
   //console.log(lastName.length);
   alertLastName.innerHTML = ""
   
 }

//email validation
if(email == ""){
  //console.log("veuillez entrer votre adresse email");
  alertEmail.innerHTML = "veuillez entrer votre adresse email"
  sendForm = false 
}else if(!email.match(emailFilter)) {
  //console.log("veuillez entrer une adresse email valide");
  alertEmail.innerHTML = "veuillez entrer une adresse email valide"
  sendForm = false 
  //utilisation de la validation email dans html -> pas fiable
}else{
  //console.log('email valide');
  alertEmail.innerHTML = ""
}

let today = new Date().toISOString().slice(0,4)
//birthdate validation
if(birthdate == ""){
  //console.log("veuillez entrer votre date de naissance");
  alertBirthdate.innerHTML = "veuillez entrer votre date de naissance"
  sendForm = false
} else if(birthdate.slice(0,4) > 2004) {
  alertBirthdate.innerHTML = "vous devez être majeur pour vous inscrire"
  console.log(today);
  //console.log(new Date().toISOString().slice(0,4));
 //console.log("BIRTHDATE",birthdate.slice(0,4));
  sendForm = false
}
else {
  //console.log(birthdate);
  alertBirthdate.innerHTML = "";
}

//quantity validation
if(quantity == ""){
  //console.log("veuillez entrer une valeur");
  alertQuantity.innerHTML = "veuillez entrer une valeur"
  sendForm = false
} else if(!quantity.match(numbersFilter)) {
  alertQuantity.innerHTML = "veuillez saisir une valeur numérique"
  sendForm = false
} else {
  //console.log("valeur valide");
  alertQuantity.innerHTML = ""
}


//select city validation
if(locationSelected == null){
  //console.log("select a location");
  alertLocation.innerHTML = "sélectionnez une ville"
  sendForm = false;
} else{
  //console.log("location selected successfully"); 
  alertLocation.innerHTML = ""
}


//termes validation
if(termesOfServices == null) {
  //console.log("vous devez accepter les conditions pour poursuivre votre inscription");
  alertTOS.innerHTML = "vous devez accepter les conditions d'utilisation pour poursuivre votre inscription"
  sendForm = false;
} else {
  //console.log("condition acceptées");
  alertTOS.innerHTML = ""
}

 return sendForm; 
}


//confirmation envoi formulaire

async function btnSubmitCheck() {

  var sendForm = await validate();
  const modalConfirmation = document.getElementById('modal-confirmation');
  //modalConfirmation.style.display = "block"

 // console.log(sendForm);
  if(sendForm) {
    console.log(sendForm,'confirmation message');  
   
    //launch modal confirmation 
    //console.log(modalConfirmation);
    closeModal('modal-form')
    modalConfirmation.style.display = "block"

  }else{
    console.log(sendForm, "not sent");

  }
}