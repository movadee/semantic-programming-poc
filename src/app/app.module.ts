import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// components
import { AppComponent } from './app.component';
import { FormInputAddressComponent } from './components/form-components/form-input-address/form-input-address.component';

// services
import { DynamicComponentLoaderService } from './components/dynamic-component-loader.service';


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
