import {Component, Input} from "@angular/core";
import {ControlGroup} from "@angular/common";
import {QuestionBase} from "./question-base";
import {QuestionControlService} from "./question-control.service";
import {DynamicFormQuestionComponent} from "./dynamic-form-question.component";
import {DropdownQuestion} from "./question-dropdown";
import {TextboxQuestion} from "./question-textbox";

@Component({
    selector: 'dynamic-form',
    templateUrl: 'app/dynamic-form.component.html',
    directives: [DynamicFormQuestionComponent],
    providers: [QuestionControlService]
})
export class DynamicForm {

    @Input()
    questions:QuestionBase<any>[] = [];
    form:ControlGroup;
    payLoad = '';
    selectedQ:QuestionBase<any>;

    constructor(private qcs:QuestionControlService) {
    }

    ngOnInit() {
        this.form = this.qcs.toControlGroup(this.questions);
    }

    addRule() {
        //this.qcs.toControlGroup(this.questions);
        this.questions.push(
            new DropdownQuestion({
                key:'limit_by',
                label: 'Rule Type',
                options: [
                    {key:'default',  value:'Select A Rule'},
                    {key:'gp_submit_limit_total',  value:'Number of Submissions'},
                    {key:'gp_submit_limit_ip',   value:'IP Address'},
                    {key:'gp_submit_limit_usr',value:'User'},
                    {key:'gp_submit_limit_role',value:'User Role'},
                    {key:'gp_submit_limit_field',value:'Field'},
                    {key:'gp_submit_limit_embed_url',value:'Embed URL'}
                ],
                value:'default',
                required: true
            }),
            new TextboxQuestion({
                key:'limit',
                label:'Rule Definition',
                value:'',
                required: true,
                order: 2
            })
        );
        console.log(this.questions);
    }

    deleteRule(q:QuestionBase<any>) {
        this.questions.splice(this.questions.indexOf(q), 1);
    }

    onSelect(q:QuestionBase<any>) {
        this.selectedQ = q;
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}