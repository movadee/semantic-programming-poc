// Inspired by: https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286

import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';
import { FormInputAddressComponent } from './form-components/form-input-address/form-input-address.component';

@Injectable()
export class DynamicComponentLoaderService {

  rootViewContainer;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicComponent() {
    // array of components that needs to be dynamically generated
    let data = [FormInputAddressComponent, FormInputAddressComponent, FormInputAddressComponent, FormInputAddressComponent, FormInputAddressComponent];

    for (let entry of data) {
      let factory = this.factoryResolver.resolveComponentFactory(entry);
      this.rootViewContainer.insert(factory.create(this.rootViewContainer.parentInjector).hostView);
    }
  }

}
