
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
            if (obj.media_type == "image") {
                $("#video").css("display", "none");
                $("#img").css("display", "flex");
                $("#img").attr("src", obj.url);
            } else {
                $("#img").css("display", "none");
                $("#video").css("display", "flex");
                $("#video").attr("src", obj.url);

            }
            $("#descricao").text(obj.explanation);
            $("#data").text(obj.date);
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