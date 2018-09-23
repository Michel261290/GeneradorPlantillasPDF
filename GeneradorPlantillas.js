var doc;

$(document).ready(function () {
    $("#textoArea").val('InsertarPDF("Hola Mundo", "normal", 10,10);');
    eventoPresionarTecla();
});

function eventoPresionarTecla() {
    var texto = $("#textoArea").val();
    try {
        doc = new jsPDF()
        var evaluar =
            texto +
            "var string = doc.output('datauristring');" +
            "$('#framePrincipal').attr('src', string).attr('src', string);";
        eval(evaluar);
    } catch (error) {
      console.log(error);
    }

}

/*********************************************************************************************************
 * 				FUNCION PARA INSERTAR TEXTO EN PDF
 *********************************************************************************************************/
function InsertarPDF(text, tipoletra, posicionX, posicionY) {
    var margen = parseInt(7);
    altura = parseInt(posicionY);
    doc.setFontType(tipoletra);
    doc.text(parseInt(margen) + parseInt(posicionX), altura, noNulos(text))
}

function InsertarPagina() {
    doc.addPage();
}

function noNulos(texto) {
   if(texto==null || texto==undefined){
    return "";
   }
   return texto.toString();
}


var json = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
  ];