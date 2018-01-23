// Inspired by: https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286

import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';
import { FormInputAddressComponent } from './form-input-address/form-input-address.component';

@Injectable()
export class DynamicComponentLoaderService {

  rootViewContainer;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(FormInputAddressComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    
    this.rootViewContainer.insert(component.hostView);
  }

}