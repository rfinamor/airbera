$(document).ready(function() {
    function consultar(){
      let cantPasajeros = $("#cantPasajeros").val();
      let destination = $("#destination").val();
    
      let message = "Buenos dias. Deseo consultar para " + destination + " para la cantidad de " + cantPasajeros + " personas.";
      window.location.href = "https://wa.me/5493757210077?text=" + encodeURIComponent(message);
    }
  
    // Asignar la función al evento onclick del botón
    $(".sendConsulta").on("click", consultar);
  });