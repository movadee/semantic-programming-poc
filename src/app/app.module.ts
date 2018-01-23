import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// components
import { AppComponent } from './app.component';

// services
import { DynamicComponentLoaderService } from './shared/form-components/dynamic-component-loader.service';
import { FormInputAddressComponent } from './shared/form-components/form-input-address/form-input-address.component';


@NgModule({
  declarations: [
    AppComponent,

    // components
    FormInputAddressComponent
  ],
  imports: [
    BrowserModule,
    
    // material design modules
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DynamicComponentLoaderService],
  bootstrap: [AppComponent],
  entryComponents: [FormInputAddressComponent]
})
export class AppModule { }
