
let element = document.getElementById("additional");
let button = document.getElementById('bt');

function toggleText(){
   if (element.style.display != "block"){
        element.style.display = "block";
        button.textContent = "Ocultar exceso de texto";
        
   }else{
        element.style.display = "none";
        button.textContent = "Seguir leyendo!";
   }

}
