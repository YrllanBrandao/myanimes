import {showToastr } from '../toastr.js';

const passwordInput = document.getElementById("password-input");
const emailInput = document.getElementById("emailInput");
const confirmInput = document.getElementById("confirm-input");
const tokenInput = document.getElementById("access-token");
const submitButton = document.getElementById("submitButton");

passwordInput.addEventListener("input", call);
confirmInput.addEventListener("input", call);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  submit();
});

function call()
{
    if(passwordMinLength() === true && isEqual() === true)
    {
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }
}

function passwordMinLength() {
  const MIN = 8;
  const length_01 = passwordInput.value.length;
  const length_02 = confirmInput.value.length;

  if (length_01 >= MIN && length_02 >= MIN) {
  
    return true;
  } 
    return false;
  
  
}

function isEqual() {


  if (passwordInput.value === confirmInput.value) {
   
    return true
  }
   return false;
  
  
}



async function submit()
{
    const URL = "/recovery-account";

    const TOKEN = tokenInput.value;
    const headers ={
        authorization: TOKEN
    }
    const password = passwordInput.value;
    const email = emailInput.value;


    const response = await axios.post(URL, {
        headers,
        email,
        password
    });


    if(response.status >= 200 && response.status <= 299)
    {
        showToastr("success", "Senha redefinida, redirectionando...");

      
    }
    if(response.status >= 300)
    {
        showToastr("error", response.message);
    }
}