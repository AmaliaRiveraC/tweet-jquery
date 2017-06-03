(function () {


  var contador = 140;

  $("#contador").text(contador);

  var cargarPagina = function () {
    //Eventos
    $("#formulario").submit(agregarTweet);
    $("#tweet").keyup(validarNumeroDeCaracteres);
    $("#tweet").keyup(caracteresRestantes);
    $("#tweet").keyup(colorAlerta);
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
    var $parrafo = $("<p />");

    //Agregamos elemento creado por DOM a elemento existente
    $parrafo.text(mensaje);
    $contenedorPublicacion.append($parrafo);
    $publicaciones.prepend($contenedorPublicacion);

    // Limpiar textArea
    $mensajeContenedor.val(" ");
    $botonEnviar.attr("disabled", true);
    contador = 140;
    $("#contador").text(contador);
  };

  var validarNumeroDeCaracteres = function () {
    var $botonEnviar = $("#enviar");
    if ($(this).val().trim().length > 140) {
      $("#contador").text(contador);
      contador--;
      $botonEnviar.attr("disabled", true);
    } else if ($(this).val().trim().length > 0){
      $botonEnviar.removeAttr("disabled");
    } else {
      $botonEnviar.attr("disabled", true);
    }
  };

  var caracteresRestantes = function () {

    var caracteresMenos = 0;
    var maximoCaracteres = 140;

    caracteresMenos = $("#tweet").val().length;

    var totalCaracteres = maximoCaracteres - caracteresMenos;

    $("#contador").text(totalCaracteres);
  };
  
  var colorAlerta = function() {
    var $imprContador = $("#alerta");
    if($(this).val().trim().length > 129) {
      $imprContador.css("color", "red");
    } else if ($(this).val().trim().length > 119) {
      $imprContador.css("color", "orange");
    }
  };


  $(document).ready(cargarPagina);

})();
