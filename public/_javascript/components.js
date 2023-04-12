import { dropdownFunction } from "./components/dropdown.js";
import { menuToggle } from "./components/menuToggle.js";
import { tooltip } from "./components/tooltip.js";
import { search } from "./components/search.js";
import { getOriginalHeight } from "./components/getOriginalHeight.js"
import { preload } from "./preload.js";

const links = document.querySelectorAll("a");

links.forEach(link =>{
    link.addEventListener("click", ()=>{

        if ($("#progress").length === 0) {
            // inject the bar..
            $("body").append($("<div><b></b><i></i></div>").attr("id", "progress"));
            
            // animate the progress..
            $("#progress").width("101%").delay(800).fadeOut(1000, function() {
              // ..then remove it.
              $(this).remove();
            });  
          }
    })
   
})

dropdownFunction();
menuToggle();
tooltip();
search();
getOriginalHeight();
preload();
