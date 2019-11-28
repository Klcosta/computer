$(".x")
    .mouseover(function () {
        console.log(this)
        console.log(this.id)
        console.log(this.id + "y")
        console.log($(this).attr('info'))
        $(".y").addClass("grayscale")
        $("#" + this.id + "y").removeClass("grayscale")
        $(this).addClass("blackborder")
        $('#info-box').css('display', 'block');
        $('#info-box').html($(this).attr('info'));
        if (this.id === "ram" || this.id === "CPU" || this.id === "GraphicCard") {
            $("#" + this.id + "y").toggleClass("displayNone")
        }
    }
    )
    .mouseout(function () {
        $(".y").removeClass("grayscale")
        if (this.id === "ram" || this.id === "CPU" || this.id === "GraphicCard") {
            $("#" + this.id + "y").toggleClass("displayNone")
        }
        $(this).removeClass("blackborder")
        $("#info-box").css('display', 'none')
    })


$(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
}).mouseover();

    $(".x").click(clicked)

    function clicked() {
        $(".z").css("display", "none")
        $("#" + this.id + "d").css("display" , "block")
        
        $(".y").css("z-index", "-1")
        $("#ChassisFronty").css("z-index" , "0")
        
        $("#" + this.id + "y" ).css("z-index" , "4")
        $("#ChassisFronty").css("z-index" , "0")
        if (this.id === "Motherboard") {
            $("#Motherboardy").css("z-index" , "1")
        }

        
    }