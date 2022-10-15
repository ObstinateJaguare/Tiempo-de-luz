
function listClient() {

  var url = "../pages/content/listClient.php";
  $.ajax({
      url: url,
      method: "POST",

      success: function (respuesta) {

          $(".ajax_response").html(respuesta);
          $(".box-title").html("LISTADO DE CLIENTES");
          // get_habitaciones();
      },
      error: function () {
          console.log("No se ha podido obtener la información");
      }
  });
}
