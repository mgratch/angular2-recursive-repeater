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
var common_1 = require('@angular/common');
var QuestionControlService = (function () {
    function QuestionControlService(fb) {
        this.fb = fb;
    }
    QuestionControlService.prototype.toControlGroup = function (questions) {
        var group = {};
        for (var i = 0, ii = 0; i < questions.length; i++) {
            if (i != 0 && i % 2 == 0) {
                ii++;
            }
            questions.forEach(function (question) {
                console.log('this: ' + ii);
                group[ii][question.key] = question.required ? [question.value || '', common_1.Validators.required] : [];
            });
        }
        return this.fb.group(group);
    };
    QuestionControlService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], QuestionControlService);
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;
//# sourceMappingURL=question-control.service.js.map