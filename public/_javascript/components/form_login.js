import { showToastr } from "../toastr.js";


const inputPassword = document.getElementById("inputPassword");
const inputEmail = document.getElementById("inputEmail");
const submitButton = document.getElementById("submitButton");


(
    ()=>{

        if(checkEmail() === true && checkPassword() === true)
    {
        submitButton.disabled = false;
    }
    }
)()


function verifyInputs()
{
    if(checkEmail() === true && checkPassword() === true)
    {
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }
}

window.onload = verifyInputs();
inputEmail.addEventListener("input", verifyInputs)
inputPassword.addEventListener("input", verifyInputs)


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
function checkPassword()
{
    const password = inputPassword.value;
    
    if(password.length >= 8)
    {
        return true;
    }

    return false;
}

// submit form
submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    submit()
 
})
async function submit()
{
    
    const email = inputEmail.value;
    const password = inputPassword.value;
    const URL = "/login"

    
    if(checkEmail() === true && checkPassword() === true)
    {
       
        const response = await axios.post(URL, {
            password: password,
                email: email
        });

        const status = response.data.status;
        const message = response.data.message;
        console.log(message, status)
        if(status == 200)
        {
            showToastr("success", message);
            // redirect
            setTimeout(()=>{
                window.location.href = "/profile"
            }, 3000)
        }
        if(status >= 400 && status < 500)
        {
            showToastr("error", message);
        }
        
        
    

      
    }


    

}
