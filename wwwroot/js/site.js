// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

import jQuery from "jquery";

// Write your JavaScript code.
jQuery(function () {
    jQuery('.single-item').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 300
    });

    jQuery('.carousel').carousel({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 300,
    });

    jQuery(".list-group-item").click(function () {
        var shopSrc = jQuery(this).data("src");
        jQuery("iframe").attr("src", shopSrc);
    });

    function mostrarDiv(divId) {
        jQuery('.payment-info').removeClass('active');
        jQuery('#' + divId).addClass('active');
    }

    (function () {
        'use strict';
        window.addEventListener('load', function () {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();


});