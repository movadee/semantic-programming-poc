import {Component, Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template:  `
    <form [formGroup]="heroForm">
      <app-form-item *ngFor="let item of items.fields" [data]="item" [group]="heroForm"></app-form-item>
    </form>

    <br>
    <p>heroForm value: {{ heroForm.value | json}}</p>
    <p>dirty: {{ heroForm.controls.firstName?.dirty | json}}</p>
    <p>touched: {{ heroForm.controls.firstName?.touched | json}}</p>
  `
})
export class FormComponent {
  heroForm: FormGroup;
  @Input() formId: any;
  public items = require('./data_2.json');

  constructor(private fb: FormBuilder) {
    this.toFormGroup(this.items);
  }

  toFormGroup(questions) {
    let group: any = {};
    let requiredArr = [];
    
    questions.fields.forEach(question => {
      question.validation.forEach(item =>  {
        (item.type == "required") ? requiredArr.push(Validators[item.type]) : requiredArr.push(Validators[item.type](item.arguments));
      });
      group[question.id] = new FormControl(question.data || '', requiredArr);
    });

    this.heroForm = new FormGroup(group);
  }
}

