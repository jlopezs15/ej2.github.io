



function toggleText(){
     let element = document.getElementById("additional");
     let button = document.getElementById('bt');
   if (element.style.display != "none"){
        element.style.display = "none";
        button.textContent = "mostrar";
        
   }else{
        element.style.display = "block";
        button.textContent = "Ocultar";
   }


}

function toggleSecondText(){
     let element = document.getElementById("additional2");
     let button = document.getElementById('bt2');
     if (element.style.display != "none"){
          element.style.display = "none";
          button.textContent = "mostrar";
          
     }else{
          element.style.display = "block";
          button.textContent = "Ocultar";
     }
}
function toggleThirdText(){
     let element = document.getElementById("additional3");
     let button = document.getElementById('bt3');
     if (element.style.display != "none"){
          element.style.display = "none";
          button.textContent = "mostrar";
          
     }else{
          element.style.display = "block";
          button.textContent = "Ocultar";
     }
}
