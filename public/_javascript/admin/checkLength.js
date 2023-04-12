import showToastr from '../toastr.js';
    const LIMIT = 300;  
    const target = document.getElementById("synopsis");
    const textLength = document.getElementById("text-length");
    const registerButton = document.getElementById("registerButton");
 
    // form inputs
    const endpoint = '/admin-area/anime'
    const form = document.querySelector(".form");
    const title = document.getElementById("title");
    const seasons = document.getElementById("seasons");
    const author = document.getElementById("author");
    const synopsis = document.getElementById("synopsis");
    const coverUrl = document.getElementById("coverUrl");
   

    


form.addEventListener("submit", e =>{

    console.log("[SUBMIT]")
    e.preventDefault();
    submit();
});
// cheking text area 
    target.addEventListener("input", (e) =>{
        e.preventDefault();
        const TEXT = e.target.value.length
        textLength.innerText = TEXT;
        if(TEXT > LIMIT)
        {
            e.target.value = e.target.value.slice(0, 299);
        }

    });
// checkbox 
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const option01 = document.getElementById("subtitled");
const option02 = document.getElementById("dubbed");

checkboxes.forEach(checkbox =>{
    

    checkbox.addEventListener("click", (e) =>{
        const id = e.target.id;

        if(id === 'subtitled')
        {
            option02.checked = false;
        }
        if(id === 'dubbed')
        {
            option01.checked = false;
        }
    })
})

function getAnimeType()
{
    if(option01.checked)
    {
        return option01.id;
    }
    if(option02.checked)
    {
        return option02.id;
    }
    
}

// submit

async function submit()
{
    const animeType = getAnimeType()

    const response =  await axios.post(endpoint, {
        title: title.value,
        seasons: seasons.value,
        author: author.value,
        synopsis: synopsis.value,
        coverUrl: coverUrl.value,
        animeType: animeType
    });

    const status = response.data.status;
    const message = response.data.message;

    if(status >= 200 && status <= 299)
    {
        showToastr("success", message)
    }
    if(status >= 400 && status <= 499)
    {
        showToastr("error", message)
    }

}




