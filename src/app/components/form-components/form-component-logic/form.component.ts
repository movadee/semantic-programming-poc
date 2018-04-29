import {Component, Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  template:  `
    <form [formGroup]="heroForm">
      <app-form-item *ngFor="let item of items.fields" [data]="item" [group]="heroForm"></app-form-item>
    </form>

    <p>heroForm value: {{ heroForm.value | json}}</p>
  `
})
export class FormComponent {
  heroForm: FormGroup;
  @Input() formId: any;
  public items = require('./data_2.json');;

  constructor(private fb: FormBuilder) {
    this.toFormGroup(this.items.fields);
  }

  toFormGroup(questions) {
    let group: any = {};
  
    // questions.forEach(question => {
    //   group[question.question_details.key] = question.required ? new FormControl(question.question_details.value || '', Validators.required)
    //       : new FormControl(question.question_details.value || '');
    // });

    questions.forEach(question => {
      group[question.id] = new FormControl('');
    });

    this.heroForm = new FormGroup(group);
  }
}

