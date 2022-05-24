
$("#enviar").click(() => {
    let nasa = $("#nasaDate").val();
    console.log(nasa);
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=LwZT59eFJfIoithWrnwFlvgcJiZUWfVpmCroKSiZ&date=${nasa}`,
        type: "GET",
        success: function (obj) {
            console.log(obj);
            $("#titulo").text(obj.title);
            $("#img").attr("src", obj.media_type);
            $("#descricao").text(obj.explanation);
            $("#data").date(obj.date);
        },
        error: function (erro) {
            $("#titulo").text("erro");
            $("#img").attr("src", "");
            $("#descricao").text("erro");
            $("#data").text("erro");

        },


    });

});