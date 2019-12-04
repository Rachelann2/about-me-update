$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

function sendMail() {
    var link = "mailto: rachelannies2@hotmail.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + escape("This is my subject")
        + "&body=" + escape(document.getElementById('myText').value)
        ;

    window.location.href = link;
}

$(document).ready(function () {
    //Scroll Navigator

    $('#aboutbtn').click(function () {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top

        }, 1200);

        $('.navbar-collapse').collapse('hide');
    })
});