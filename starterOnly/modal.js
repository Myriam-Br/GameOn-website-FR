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

const modalValidation = document.getElementsByClassName('container-msg');
const btnSubmit = document.getElementsByClassName("btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  console.log("modal closed successfully");
  modalbg.style.display = "none";
}


//form validation

function validate() {

  //element DOM
  var firstName = document.getElementById('first');
  const alertFirstName = document.getElementById('alert-firstname');

  var lastName = document.getElementById('last');
  const alertLastName = document.getElementById('alert-lastname');

  var email = document.getElementById('email'); 
  const emailFilter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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


//birthdate validation
if(birthdate == ""){
  //console.log("veuillez entrer votre date de naissance");
  alertBirthdate.innerHTML = "veuillez entrer votre date de naissance"
  sendForm = false
} else {
  //console.log("date de naissance valide");
  alertBirthdate.innerHTML = ""
}

//quantity validation
if(quantity == ""){
  //console.log("veuillez entrer une valeur");
  alertQuantity.innerHTML = "veuillez entrer une valeur"
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







