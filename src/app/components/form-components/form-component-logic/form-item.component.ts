import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormTemplateBaseComponent } from './form-template-base.component';
import { FormGroup } from '@angular/forms';
import { FormFullNameComponent } from '../form-full-name-input.component';

@Component({
  selector: 'app-form-item',
  template: `<ng-container #container></ng-container>`
})
export class FormItemComponent implements OnInit {
  @Input('group') public heroForm: FormGroup;
  @Input() data: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly templateMapper = {
    formFullNameInput: FormFullNameComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForCardType(this.data.cardType));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<FormTemplateBaseComponent>componentRef.instance).data = this.data;
    (<FormTemplateBaseComponent>componentRef.instance).group = this.heroForm;
  }
  private getComponentForCardType(cardType) {
    return this.templateMapper[cardType];
  }

}
