var doc;

$(document).ready(function () {
    // $("#textoArea").val('InsertarPlantilla(null,214,0, 0,0); \n' +
    //     'InsertarTexto("Contrato", "normal",8,20,46);');
    // eventoPresionarTecla();
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
 *                FUNCION PARA INSERTAR TEXTO EN PDF
 *********************************************************************************************************/
function InsertarTexto(text, tipoletra, tamanio, posicionX, posicionY) {
    try {
        var margen = parseInt(5);
        var altura = parseInt(5);
        doc.setFontSize(tamanio);
        doc.setFontType(tipoletra);
        doc.setFont('helvetica');
        doc.text(margen + parseInt(posicionX), altura + +parseInt(posicionY), noNulos(text));
    } catch (e) {

    }
}



function Pagina(numeroPagina){
    if (numeroPagina==0){
        doc.addImage(arreglo[0], 'JPEG', 0, 0, 214, 0);
    }else{
        doc.addPage();
        doc.addImage(arreglo[numeroPagina],'JPEG', 0, 0,214, 0);
    }
}


function noNulos(texto) {
    if (texto == null || texto == undefined) {
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