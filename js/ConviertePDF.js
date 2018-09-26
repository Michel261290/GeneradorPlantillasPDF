var doc_pdf,
    pagina_actual,
    paginas_totales,
    canvas = $('#pdf-canvas').get(0),
    canvas_ctx = canvas.getContext('2d');

var arreglo = [];



function mostrarPDF(pdf_url) {
    PDFJS.getDocument({ url: pdf_url }).then(function (pdf_doc) {
        doc_pdf = pdf_doc;
        paginas_totales = pdf_doc.numPages;
        mostrarPagina(1);
    }).catch(function (error) {
        console.log(error.message);
    });;
}

function mostrarPagina(page_no) {
    pagina_actual = page_no;
    doc_pdf.getPage(page_no).then(function (page) {
            var scale_required = canvas.width / page.getViewport(1).width;
            var viewport = page.getViewport(scale_required);
            canvas.height = viewport.height;
            var renderContext = {
                canvasContext: canvas_ctx,
                viewport: viewport
            };
            page.render(renderContext).then(function () {
                //console.log($('#pdf-canvas').get(0).toDataURL("image/jpeg", 100.0));
                arreglo.push($('#pdf-canvas').get(0).toDataURL("image/jpeg", 100.0));
                if (page_no < paginas_totales) {
                    mostrarPagina(++page_no);
                    if (page_no==paginas_totales){
                       $("#start-button").attr("disabled",false);
                    }
                }
            });
        }
    )
};

$("#upload-button").on('click', function () {
    $("#file-to-upload").trigger('click');
});

$("#file-to-upload").on('change', function () {

    if (['application/pdf'].indexOf($("#file-to-upload").get(0).files[0].type) == -1) {
        alert('Error : No es un archivo PDF');
        return;
    }
    mostrarPDF(URL.createObjectURL($("#file-to-upload").get(0).files[0]));
});