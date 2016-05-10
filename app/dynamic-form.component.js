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
var question_control_service_1 = require("./question-control.service");
var dynamic_form_question_component_1 = require("./dynamic-form-question.component");
var question_dropdown_1 = require("./question-dropdown");
var question_textbox_1 = require("./question-textbox");
var DynamicForm = (function () {
    function DynamicForm(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicForm.prototype.ngOnInit = function () {
        this.form = this.qcs.toControlGroup(this.questions);
    };
    DynamicForm.prototype.addRule = function () {
        //this.qcs.toControlGroup(this.questions);
        this.questions.push(new question_dropdown_1.DropdownQuestion({
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
        }), new question_textbox_1.TextboxQuestion({
            key: 'limit',
            label: 'Rule Definition',
            value: '',
            required: true,
            order: 2
        }));
        console.log(this.questions);
    };
    DynamicForm.prototype.deleteRule = function (q) {
        this.questions.splice(this.questions.indexOf(q), 1);
    };
    DynamicForm.prototype.onSelect = function (q) {
        this.selectedQ = q;
    };
    DynamicForm.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicForm.prototype, "questions", void 0);
    DynamicForm = __decorate([
        core_1.Component({
            selector: 'dynamic-form',
            templateUrl: 'app/dynamic-form.component.html',
            directives: [dynamic_form_question_component_1.DynamicFormQuestionComponent],
            providers: [question_control_service_1.QuestionControlService]
        }), 
        __metadata('design:paramtypes', [question_control_service_1.QuestionControlService])
    ], DynamicForm);
    return DynamicForm;
}());
exports.DynamicForm = DynamicForm;
//# sourceMappingURL=dynamic-form.component.js.map