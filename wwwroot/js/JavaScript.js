$(document).ready(function () {
    // hide dropdown menus on page load
    $('.dropdown-menu').hide();

    // toggle dropdown menus on click
    $('.dropdown-toggle').click(function (event) {
        event.preventDefault();
        $(this).siblings('.dropdown-menu').toggle();

    });

    // handle clicks on menu items
    $('.menu a').click(function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        // send request to server for corresponding action
        $.post(href, function (data) {
            // handle response from server
            console.log(data);
        });
    });
});