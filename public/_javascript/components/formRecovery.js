import { showToastr } from "../toastr.js";

const inputEmail = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    submit();
})

inputEmail.addEventListener("input", ()=>{
    if(checkEmail() == true)
    {
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }
})
function checkEmail()
{
    const email = inputEmail.value;
    const regex = /\w+\@\w+\.\w+/g;
    const compare = email.match(regex);

    if(compare !== null)
    {
        return true;
    }

    return false;
}

async function submit()
{
   
    const email = inputEmail.value;
    const isValid = checkEmail();

    if(isValid)
    {
        const URL = "/recovery-password";

        const response = await axios.post(URL,{
            email
        });
        const status = response.data.status;
        const message = response.data.message;
        if(status >= 400 && status <= 499)
        {
            showToastr("error", message);
        }
        if(status >= 200 && status <= 299)
        {
            showToastr("success", message);
        }
    }
    else{
        showToastr('error', "Endereço de email inválido!");
    }
}

