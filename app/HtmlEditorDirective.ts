
import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';


@Directive({ selector: '[HtmlEditor]' })
export class HtmlEditorDirective implements OnInit {

    $: any;
    tinymce: any;

    constructor(element: ElementRef, renderer: Renderer) {
        tinymce.init({
            selector: 'div.htmlEditor',
            inline: true,
            fixed_toolbar_container: "div#textEditorToolbar",
            theme: 'modern',
            menubar: false,
            statusbar: false,
            toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons',
            plugins: [
                // 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                // 'searchreplace wordcount visualblocks visualchars code fullscreen',
                // 'insertdatetime media nonbreaking save table contextmenu directionality',
                // 'emoticons template paste textcolor colorpicker textpattern imagetools autoresize'
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools'
            ],
            content_css: [
                //'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                'app/assets/css/basic.min.css'
            ],
            init_instance_callback: function (editor) {
                console.log("Editor: '" + editor.id + "' is now initialized.");
            },
            setup: function (editor) {
                editor.on('init', function (e) {
                    $('div#postContent').click(function(){
                            console.log('click triggered.')
                    });
                    $('div#postContent').trigger('click');
                    
                    //$("#mceu_0").css({ "border-width": "0px" });   // Remove editor border
                });
                editor.on('blur', function (e) {
                    throw new Error('Tinymck hack workaround');
                });
            }
        });

    }

}