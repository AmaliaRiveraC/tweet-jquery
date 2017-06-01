$(document).ready(function() {
  
  //Evento a formulario
  $("#formulario").submit(function(e) {
    e.preventDefault();
    // Obtener elementos html
    var $mensajeContenedor = $("#tweet");
    var $publicaciones = $("#publicar");
    var mensaje = $mensajeContenedor.val();
    
    //Creamos elementos HTML desde el DOM
    var $contenedorPublicacion = $("<div class='jumbotron'/>");
    
    //Agregamos elemento creado por DOM a elemento existente
    $contenedorPublicacion.text(mensaje);
    $publicaciones.prepend($contenedorPublicacion);
    
  });
  
});