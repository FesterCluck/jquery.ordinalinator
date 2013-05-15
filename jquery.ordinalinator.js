(function ($) {
    $.fn.ordinalinator = function () {
        $(".ordinal", this).each(function () {
            $(this).on("change", function (event) {
                var i = $(this).text();
                var j = i % 10;
                if (j == 1 && i != 11) {
                    return $(this).addClass("ord-st");
                }
                if (j == 2 && i != 12) {
                    return $(this).addClass("ord-nd");
                }
                if (j == 3 && i != 13) {
                    return $(this).addClass("ord-rd");
                }
                return $(this).addClass("ord-th");
            });
            return $(this).trigger("change");
        });
    };
}(jQuery));