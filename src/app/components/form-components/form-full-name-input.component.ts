// Component to be dynamically added to the DOM
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormTemplateBaseComponent } from './form-component-logic/form-template-base.component';

@Component({
  selector: 'app-form-full-name-input',
  template: `
  <!-- (II)::STEP_1 Form Input Address Component that is dynamically added to the DOM -->

  <div class="form-group" [formGroup]="group">
    <label class="center-block">{{data.value.label}}:
      <input type="text" class="form-control" [formControlName]="data.id">
    </label>
  </div>
  `
})
export class FormFullNameComponent extends FormTemplateBaseComponent { }
