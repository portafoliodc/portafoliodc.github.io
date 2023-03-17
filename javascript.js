
/* EL LOADER */
$(window).on('load', function () {
    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 2000);
   
});



window.onload=ocultar;   //cargamos la función ocultar al inicio.

function ocultar(){
   document.getElementById("mostrarDesarrolloWeb").style.display = "none"; //aquí hacemos oculto el DIV
  document.getElementById("mostrarAbout").style.display = "none";
  document.getElementById("mostrarTecnico").style.display = "none"; 
}

    function ensenialo() {
      document.getElementById("mostrarAbout").style.display = "none";  //ocultamos los otros DIVS
      document.getElementById("mostrarTecnico").style.display = "none"; 
      var x = document.getElementById("mostrarDesarrolloWeb");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }

  function ensenialoTecnico() { 
    document.getElementById("mostrarAbout").style.display = "none";         //Ocultamos los otros DIVS
    document.getElementById("mostrarDesarrolloWeb").style.display = "none";  
      var x = document.getElementById("mostrarTecnico");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }

  function ensenialoAbout() {
    document.getElementById("mostrarDesarrolloWeb").style.display = "none";
     document.getElementById("mostrarTecnico").style.display = "none";
      var x = document.getElementById("mostrarAbout");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }


