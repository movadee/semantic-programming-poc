import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

// material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';

// components
import { AppComponent } from './app.component';

// dynamically loaded components
import { FormFullNameComponent } from './components/form-components/form-full-name-input.component';
import { FormComponent } from './components/form-components/form-component-logic/form.component';
import { FormItemComponent } from './components/form-components/form-component-logic/form-item.component';
import { FormTemplateBaseComponent } from './components/form-components/form-component-logic/form-template-base.component';


@NgModule({
  declarations: [
    AppComponent,

    // components
    FormComponent,
    FormItemComponent,
    FormTemplateBaseComponent,
    FormFullNameComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    // material design modules
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  // (II)::STEP_4  Entry components are creating a factory so that when
  // the ComponentFactoryResolver is called we are able to create an instance
  // of the component and add it to the DOM.
  entryComponents: [FormFullNameComponent]
})
export class AppModule { }
