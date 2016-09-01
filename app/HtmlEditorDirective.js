"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HtmlEditorDirective = (function () {
    function HtmlEditorDirective(element, renderer) {
        tinymce.init({
            selector: '.htmlEditor',
            theme: 'modern',
            menubar: false,
            statusbar: false,
            //inline:true,
            //fixed_boolbar_container:'#textEditorToolbar',
            //theme_advanced_toolbar_location: "external",
            toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools autoresize'
            ],
            content_css: [
                //'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                'app/assets/css/basic.min.css'
            ],
            init_instance_callback: function (editor) {
                console.log("Editor: '" + editor.id + "' is now initialized.");
                //editor.ui.Toolbar().renderTo('#textEditorToolbar');
                var $toolbar = $('div.mce-toolbar-grp'); // $('#' + editor.id + '_external');
                if ($toolbar) {
                    console.log($toolbar);
                    console.log('Append toolbar to target.');
                    $toolbar.appendTo('#textEditorToolbar');
                }
            },
            setup: function (editor) {
                editor.on('init', function (e) {
                    $("#mceu_0").css({ "border-width": "0px" }); // Remove editor border
                });
            }
        });
    }
    HtmlEditorDirective = __decorate([
        core_1.Directive({ selector: '[HtmlEditor]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], HtmlEditorDirective);
    return HtmlEditorDirective;
}());
exports.HtmlEditorDirective = HtmlEditorDirective;
//# sourceMappingURL=HtmlEditorDirective.js.map