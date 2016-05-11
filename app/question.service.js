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
var core_1 = require("@angular/core");
var question_textbox_1 = require("./question-textbox");
var question_dropdown_1 = require("./question-dropdown");
var QuestionService = (function () {
    function QuestionService() {
    }
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new question_dropdown_1.DropdownQuestion({
                key: 'limit_by',
                label: 'Rule Type',
                options: [
                    { key: 'default', value: 'Select A Rule' },
                    { key: 'gp_submit_limit_total', value: 'Number of Submissions' },
                    { key: 'gp_submit_limit_ip', value: 'IP Address' },
                    { key: 'gp_submit_limit_usr', value: 'User' },
                    { key: 'gp_submit_limit_role', value: 'User Role' },
                    { key: 'gp_submit_limit_field', value: 'Field' },
                    { key: 'gp_submit_limit_embed_url', value: 'Embed URL' }
                ],
                value: 'default',
                required: true,
                order: 1
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'limit',
                label: 'Rule Definition',
                value: '',
                required: true,
                order: 2
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService.prototype.getDefaultFields = function () {
        return [
            new question_dropdown_1.DropdownQuestion({
                key: 'limit_by',
                label: 'Rule Type',
                options: [
                    { key: 'default', value: 'Select A Rule' },
                    { key: 'gp_submit_limit_total', value: 'Number of Submissions' },
                    { key: 'gp_submit_limit_ip', value: 'IP Address' },
                    { key: 'gp_submit_limit_usr', value: 'User' },
                    { key: 'gp_submit_limit_role', value: 'User Role' },
                    { key: 'gp_submit_limit_field', value: 'Field' },
                    { key: 'gp_submit_limit_embed_url', value: 'Embed URL' }
                ],
                value: 'default',
                required: true
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'limit',
                label: 'Rule Definition',
                value: '',
                required: true,
                order: 2
            })
        ];
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map