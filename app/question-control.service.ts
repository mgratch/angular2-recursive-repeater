import { Injectable }   from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor(private fb:FormBuilder){ }

  toControlGroup(questions:QuestionBase<any>[] ) {
    let group = {};

      for ( var i = 0, ii = 0; i < questions.length; i++){
          if (i != 0 && i % 2 == 0){
              ii++;
          }

          questions.forEach(question => {
              console.log('this: '+ii);
              group[ii][question.key] = question.required ? [question.value || '', Validators.required] : [];
          });

      }
      return this.fb.group(group);
  }
}