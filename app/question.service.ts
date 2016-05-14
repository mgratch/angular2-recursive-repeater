import { Injectable }       from '@angular/core';
import { QuestionBase }     from './question-base';
import { DynamicForm }      from './dynamic-form.component';
import { TextboxQuestion }  from './question-textbox';
import { DropdownQuestion } from './question-dropdown';

@Injectable()
export class QuestionService {

  getQuestions() {

    let questions:QuestionBase<any>[] = [
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
            required: true,
            order: 1
        }),
        new TextboxQuestion({
            key:'limit',
            label:'Rule Definition',
            value:'',
            required: true,
            order: 2
        })
    ];

    return questions.sort((a,b) => a.order - b.order);
  }

}