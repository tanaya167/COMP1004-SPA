﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
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