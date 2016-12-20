$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/lsoserg@ukr.net",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                comment: $('#comment').val
            },
            dataType: "json"
        }).done(function () {
            $('form').html('<h1>Дякую за відгук!</h1>');
        });
    });
});
