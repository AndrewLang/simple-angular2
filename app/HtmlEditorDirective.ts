
import { Directive, ElementRef, Input, Renderer } from '@angular/core';


@Directive({ selector: '[HtmlEditor]' })
export class HtmlEditorDirective {

    constructor(element: ElementRef, renderer: Renderer) {

        tinymce.init({
            selector: '.htmlEditor',
            theme: 'modern',
            menubar: true,
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
                //  var $toolbar = $('div.mce-toolbar-grp');// $('#' + editor.id + '_external');

                // if ($toolbar){
                //     console.log( $toolbar);
                //     console.log('Append toolbar to target.');
                //     $toolbar.appendTo('#textEditorToolbar');
                // }
            },
            setup: function (editor) {
                editor.on('init', function (e) {
                    $("#mceu_0").css({ "border-width": "0px" });   // Remove editor border
                });
            }
        });
    }
}