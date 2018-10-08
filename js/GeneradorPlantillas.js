var doc;

$(document).ready(function () {
    $("#textoArea").val('InsertarTexto("Contrato", "normal",8,20,46);');
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

    }

}

/*********************************************************************************************************
 *                FUNCION PARA INSERTAR TEXTO EN PDF
 *********************************************************************************************************/
function InsertarTexto(text, tipoletra, tamanio, posicionX, posicionY) {
    try {

        if (typeof text == 'string') {
            var llaveInicio = text.indexOf("{");
            var llaveFin = text.indexOf("}");
            if (llaveInicio != -1 && llaveFin != -1) {
                text = text.substring((llaveInicio + 1), llaveFin);
                text = JSON.stringify(eval('data[0].' + text)).replace(/"/g ,"");
            }
        }
        var margen = parseInt(5);
        var altura = parseInt(5);
        doc.setFontSize(tamanio);
        doc.setFontType(tipoletra);
        doc.setFont('helvetica');
        doc.text(margen + parseInt(posicionX), altura +parseInt(posicionY), noNulos(text));
    } catch (e) {

    }
}



function Pagina(numeroPagina) {
    if (numeroPagina == 0) {
        doc.addImage(arreglo[0], 'JPEG', 0, 0, 214, 0);
    } else {
        doc.addPage();
        doc.addImage(arreglo[numeroPagina], 'JPEG', 0, 0, 214, 0);
    }
}


function noNulos(texto) {
    if (texto == null || texto == undefined) {
        return "";
    }
    return texto.toString();
}


var data = [
    {
        "userId": 15,
        "id": 10,
        "title": "esto es una variable de un json",
        "body":  "esto es otra variable de un jotason"
    },
    {
        "userId": 1,
        "id": 2,
        "title": 'qui est esse',
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
];