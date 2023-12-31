'use strict';

function localize() {
    var localized = 0;

    var translate = function(messageID) {
        localized++;

        return chrome.i18n.getMessage(messageID);
    };

    $('[i18n]:not(.i18n-replaced)').each(function() {
        var element = $(this);

        element.html(translate(element.attr('i18n')));
        element.addClass('i18n-replaced');
    });

    $('[data-i18n]:not(.i18n-replaced)').each(function() {
        var element = $(this);

        const translated = translate(element.data('i18n'));
        element.html(translated);
        element.addClass('i18n-replaced');
        if (element.attr("title") !== "") {
            element.attr("title", translated);
        }
    });

    $('[i18n_title]:not(.i18n_title-replaced)').each(function() {
        var element = $(this);

        element.attr('title', translate(element.attr('i18n_title')));
        element.addClass('i18n_title-replaced');
    });

    $('[data-i18n_title]:not(.i18n_title-replaced)').each(function() {
        var element = $(this);

        element.attr('title', translate(element.data('i18n_title')));
        element.addClass('i18n_title-replaced');
    });

    $('[i18n_label]:not(.i18n_label-replaced)').each(function() {
        var element = $(this);

        element.attr('label', translate(element.attr('i18n_label')));
        element.addClass('i18n_label-replaced');
    });

    $('[data-i18n_label]:not(.i18n_label-replaced)').each(function() {
        var element = $(this);

        element.attr('label', translate(element.data('i18n_label')));
        element.addClass('i18n_label-replaced');
    });

    $('[i18n_value]:not(.i18n_value-replaced)').each(function() {
        var element = $(this);

        element.val(translate(element.attr('i18n_value')));
        element.addClass('i18n_value-replaced');
    });

    $('[i18n_placeholder]:not(.i18n_placeholder-replaced)').each(function() {
        var element = $(this);

        element.attr('placeholder', translate(element.attr('i18n_placeholder')));
        element.addClass('i18n_placeholder-replaced');
    });

    return localized;
}
