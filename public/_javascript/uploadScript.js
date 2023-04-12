

const thumb = document.getElementById("thumb")
const divImage = document.getElementById("image-loaded");




thumb.addEventListener("change", ()=>{
    
    const reader = new FileReader();


    

    reader.readAsDataURL(thumb.files[0]);

    reader.onload = (e) =>{
        const img = document.createElement("img");
        img.src = e.target.result;
        divImage.append(img)
    }
//     img.src = imageUrl;
 

})