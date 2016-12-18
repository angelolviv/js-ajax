$(function() {
    $('#submit').click(function(e) {
        e.preventDefault()
        $.ajax({
            url: "https://formspree.io/lsoserg@ukr.net",
            method: "POST",
            data: {
                message: $('#name').val()
            },
            dataType: "json"
        });
        .done(function() {
            $('form').html('<h1>Thank you</h1>');
        });
    });
});
