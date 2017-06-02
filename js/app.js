(function () {


  var contador = 140;

  $("#contador").text(contador);

  var cargarPagina = function () {
    //Eventos
    $("#formulario").submit(agregarTweet);
    $("#tweet").keyup(validarNumeroDeCaracteres);
    $("#tweet").keyup(caracteresRestantes);
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
    var $parrafo = $("<p />");

    //Agregamos elemento creado por DOM a elemento existente
    $parrafo.text(mensaje);
    $contenedorPublicacion.append($parrafo);
    $publicaciones.prepend($contenedorPublicacion);

    // Limpiar textArea
    $mensajeContenedor.val(" ");
    $botonEnviar.attr("disabled", true);
  };

  var validarNumeroDeCaracteres = function () {
    var $botonEnviar = $("#enviar");
    console.log($(this));
    if ($(this).val().trim().length > 0) {
      $("#contador").text(contador);
      contador--;
      $botonEnviar.removeAttr("disabled");
    } else {
      $botonEnviar.attr("disabled", true);
    };
  };

  var caracteresRestantes = function () {

    var contadorCaracteres = 0;
    var maximoCaracteres = 140;

    contadorCaracteres = $("#tweet").val().length;

    var totalCaracteres = maximoCaracteres - contadorCaracteres;

    $("#contador").text(totalCaracteres);
  };


  $(document).ready(cargarPagina);

})();
