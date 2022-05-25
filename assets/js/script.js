
$("#enviar").click(function (e) {
    e.preventDefault();
    let nasa = $("#nasaDate").val();
    console.log(nasa);
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=LwZT59eFJfIoithWrnwFlvgcJiZUWfVpmCroKSiZ&date=${nasa}`,
        type: "GET",
        success: function (obj) {
            console.log(obj);
            $("#titulo").text(obj.title);
            $("#img").attr("src", obj.url);
            //if (media_type == "imagem") {
            //   $("#video").css("display", "none")
            //    $("#img").css("display", "block")
            //    $("#img").attr("src", obj.url);
            // } else {
            //    $("#img").css("display", "none")
            //    $("#video").css("display", "block")
            //    $("#video").attr("src", obj.url);

            //}
            $("#descricao").text(obj.explanation);
            $("#data").date(obj.date);
        },
        error: function (erro) {
            $("#titulo").text("erro");
            $("#img").attr("src", "");
            $("#descricao").text("erro");
            $("#data").text("erro");
            $("#video").attr("src", "");

        },


    });

});