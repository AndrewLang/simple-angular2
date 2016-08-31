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
var HtmlEditorDirective_1 = require('./HtmlEditorDirective');
var AppComponent = (function () {
    function AppComponent() {
        this.postContent = "";
        console.log('constructor of app Component');
    }
    AppComponent.prototype.ngOnInit = function () {
        var temp = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus sem quam, quis finibus leo pretium sit amet. Sed imperdiet venenatis enim at sagittis. Praesent porta purus nec aliquet pellentesque. Nunc bibendum urna non risus lacinia, at venenatis\n                    nisl interdum. Duis porta tristique augue vel dictum. Curabitur feugiat tincidunt risus eget semper. Aliquam quis cursus nibh, feugiat commodo arcu. Aliquam non dolor vel ex dapibus interdum vitae nec lorem. Phasellus fermentum neque ut nibh hendrerit\n                    tempus. Pellentesque sit amet ligula dui. Donec laoreet est erat. Etiam aliquet sem sit amet quam tempus aliquam. Vivamus eleifend nunc ipsum, a viverra neque efficitur at. Duis mi nisl, accumsan quis ex et, aliquam lobortis lectus. Vestibulum luctus\n                    diam eu mattis gravida. Quisque nisi felis, posuere vitae purus sit amet, pellentesque fermentum enim.</p>";
        var max = 10;
        while (max > 0) {
            this.postContent += temp;
            max--;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template:'<h1>My First Angular 2 app.</h1>',
            //templateUrl :'app/views/start.html'
            templateUrl: 'app/views/3rows.html',
            directives: [HtmlEditorDirective_1.HtmlEditorDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map