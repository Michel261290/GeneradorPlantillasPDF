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
        console.log(evaluar);
        eval(evaluar);
    } catch (error) {

    }


}

/*********************************************************************************************************
 * 				FUNCION PARA INSERTAR TEXTO EN PDF
 *********************************************************************************************************/
function InsertarPDF(text, tipoletra, posicionX, posicionY) {
    var margen = parseInt(7);
    altura = parseInt(posicionY);
    doc.setFontType(tipoletra);
    doc.text(parseInt(margen) + parseInt(posicionX), altura, text)
}

function InsertarPagina() {
    doc.addPage();
}


