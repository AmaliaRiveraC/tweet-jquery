(function(){
  
  // Botón que se utiliza en varias funciones
  
  
  var cargarPagina = function() {
    //Eventos
  $("#formulario").submit(agregarTweet);
  $("#tweet").keyup(validarNumeroDeCaracteres);
    console.log(event);
  };

  var agregarTweet = function (e) {
    e.preventDefault();
    // Obtener elementos html
    var $botonEnviar = $("#enviar");
    var $mensajeContenedor = $("#tweet");
    var $publicaciones = $("#publicar");
    var mensaje = $mensajeContenedor.val();

    //Creamos elementos HTML desde el DOM
    var $contenedorPublicacion = $("<div class='jumbotron'/>");

    //Agregamos elemento creado por DOM a elemento existente
    $contenedorPublicacion.text(mensaje);
    $publicaciones.prepend($contenedorPublicacion);
    
    // Limpiar textArea
    $mensajeContenedor.val(" ");
    $botonEnviar.attr("disabled", true);
  };

  var validarNumeroDeCaracteres = function () {
    var $botonEnviar = $("#enviar");
    console.log($(this));
    if ( $(this).val().trim().length > 0) {
      $botonEnviar.removeAttr("disabled");
    }
  };
  


$(document).ready(cargarPagina);

  })();