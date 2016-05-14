import {Component, Input} from "@angular/core";
import {ControlGroup, ControlArray, FormBuilder} from "@angular/common";
import {QuestionBase} from "./question-base";
import {QuestionControlService} from "./question-control.service";
import {DynamicFormQuestionComponent} from "./dynamic-form-question.component";
import {TextboxQuestion} from "./question-textbox";
import {DropdownQuestion} from "./question-dropdown";

@Component({
    selector: 'dynamic-form',
    templateUrl: 'app/dynamic-form.component.html',
    directives: [DynamicFormQuestionComponent],
    providers: [QuestionControlService]
})
export class DynamicForm {

    @Input()
    questions:QuestionBase<any>[] = [];
    selectedQ:QuestionBase<any>;
    ruleControlGroups:ControlGroup[] = [];
    rules:ControlArray = new ControlArray(this.ruleControlGroups);
    payLoad = '';
    form:ControlGroup;

    constructor(private qcs:QuestionControlService,
                private fb:FormBuilder) {
    }

    ngOnInit() {
        var group = this.qcs.toControlGroup(this.questions);
        this.rules.push(group);
        this.form = this.fb.group({"rules":this.rules});
        console.log('form2:', this.form);
    }

    addRule() {
        console.log(this.form);
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
        var group = this.qcs.toControlGroup(this.questions);
        this.rules.push(group);
        console.log(this.rules);
    }

    deleteRule(q:QuestionBase<any>) {
        this.questions.splice(this.questions.indexOf(q) - 1, 2);
    }

    onSelect(q:QuestionBase<any>) {
        this.selectedQ = q;
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}