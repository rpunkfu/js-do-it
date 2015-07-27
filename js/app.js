(function ($, window, document, undefined) {
    "use strict";

    var pluginName = "JsDoIt",
        defaults   = {
            url: "https://raw.githubusercontent.com/oskarcieslik/js-do-it/master/assets/doit_sound.mp3"
        };

    function Plugin (element, options) {
        this.element   = element;
        this.settings  = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name     = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            var doItSound = new Audio();
            doItSound.src = this.settings.url;

            $(this.element).each(function () {
                $(this).mouseenter(function () {
                    doItSound.play();
                });
            });
        }
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if ( ! $.data(this, "plugin_" + pluginName) ) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);