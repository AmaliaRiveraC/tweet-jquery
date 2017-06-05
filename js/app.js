(function () {


  var contador = 140;

  $("#contador").text(contador);

  var cargarPagina = function () {
    //Eventos
    $("#formulario").submit(agregarTweet);
    $("#tweet").keyup(validarNumeroDeCaracteres);
    $("#tweet").keyup(caracteresRestantes);
    $("#tweet").keyup(colorAlerta);
    $("#tweet").keypress(cambiarTamanoTextArea);
  };

  var agregarTweet = function (e) {
    e.preventDefault();
    // Obtener elementos html
    var $botonEnviar = $("#enviar");
    var $mensajeContenedor = $("#tweet");
    var $publicaciones = $("#publicar");
    var mensaje = $mensajeContenedor.val();
    var date = new Date();
    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var hora = date.getHours();
    var ano = date.getFullYear();
    var minutos =date.getMinutes();
    var segundos = date.getSeconds();
    
    /* Ceros en formatos fecha dd:mm:aa y hora hh:mm:ss */
    if(dia < 10) {
      dia = "0" + date.getDate();
    }
    
    if(mes < 10) {
      mes = "0" + mes;
    }
    
    if(hora < 10) {
      hora = "0" + date.getHours();
    }
    
    if(minutos < 10) {
      minutos = "0" + date.getMinutes();
    }
    
    if(segundos < 10) {
      segundos = "0" + date.getSeconds();
    }
    //Creamos elementos HTML desde el DOM
    var $contenedorPublicacion = $("<div class='jumbotron'/>");
    var $parrafo = $("<p />");
    var $fecha = $("<span />");
    var $hora=$(" "+"<span />");
    
    //Agregamos elemento creado por DOM a elemento existente
    $parrafo.text(mensaje);
    $fecha.text(dia + "/" + mes + "/" + ano, ', ');
    $hora.text("  " + hora + ":"  + minutos + ":"+ segundos);
    
    
    $contenedorPublicacion.append($parrafo);
    $contenedorPublicacion.append($fecha);
    $contenedorPublicacion.append($hora);
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
      $imprContador.removeClass("naranja").addClass("rojo");
    } else if ($(this).val().trim().length > 119) {
      $imprContador.removeClass("rojo").addClass("naranja");
    } else if ($(this).val().trim().length <= 119) {
      $imprContador.removeClass("naranja");
    }
  };
  

  $(document).ready(cargarPagina);

})();
