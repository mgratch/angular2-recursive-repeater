import {Component, Input} from "@angular/core";
import {AbstractControl, ControlGroup, ControlArray} from "@angular/common";
import {QuestionBase} from "./question-base";

@Component({
    selector: 'df-question',
    templateUrl: 'app/dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
    @Input()
    question:QuestionBase<any>;
    @Input()
    form:ControlGroup;
    rules:ControlArray;

    get isValid() {
        console.log(this.form.controls[this.question.key]);
        return this.form.controls[this.question.key].valid;
    }

}