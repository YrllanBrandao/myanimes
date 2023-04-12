import { showToastr } from "../toastr.js";

const inputPassword = document.getElementById("inputPassword");
const passwordConfirm= document.getElementById("passwordConfirm");
const inputNickname = document.getElementById("inputNickname")
const inputEmail = document.getElementById("inputEmail");
const submitButton = document.getElementById("submitButton");


(
    ()=>{

        if(checkEmail() === true && checkPassword() === true && checkNickname() === true)
    {
        submitButton.disabled = false;
    }
    }
)()


function verifyInputs()
{

    console.table(checkEmail(), checkPassword(), checkNickname())
    if(checkEmail() === true && checkPassword() === true  && checkNickname() === true)
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
passwordConfirm.addEventListener("input", verifyInputs)
inputNickname.addEventListener("input", verifyInputs)


function checkNickname()
{
    const nickname =  inputNickname.value;

    if(nickname.length >= 3)
    {
        return true;
    }
    else{
        inputNickname.classList.add("border-warning");
        return false;
    }
}


function checkEmail()
{
    const email = inputEmail.value;
    const regex = /\w+\@\w+\.\w+/g;
    const compare = email.match(regex);

    if(compare !== null)
    {
        return true;
    }
    
}
function checkPassword()
{
    const password = inputPassword.value;
    const passwordCopy = passwordConfirm.value;
    const equal = comparePasswords(password, passwordCopy);
    if(password.length >= 8 && equal === true)
    {
            return true;
    }

    return false;
}

function comparePasswords(password1, password2)
{
    const correct = password1 === password2 ? true : false;
    return correct;
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
    const nickname = inputNickname.value;
    const URL = "/register"

    
    if(checkEmail() === true && checkPassword() === true && checkNickname() === true)
    {
       
        const response = await axios.post(URL, {
            nickname,
            password,
                email
        });

        const status = response.data.status;
        const message = response.data.message;
      
        if(status >= 200 && status <= 299)
        {
            showToastr("success", message);
            // redirect
            setTimeout(()=>{
                window.location.href = "/login"
            }, 5000)
        }
        if(status >= 400 && status < 500)
        {
            showToastr("error", message);
        }
        
        
    

      
    }


    

}