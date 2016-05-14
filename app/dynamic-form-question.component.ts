import {Component, Input} from "@angular/core";
import {ControlGroup} from "@angular/common";
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

}