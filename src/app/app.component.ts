import { DynamicComponentLoaderService } from './components/dynamic-component-loader.service';
import { Component, Inject, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DynamicComponentLoaderService) service, @Inject(ViewContainerRef) viewContainerRef) {
    service.setRootViewContainerRef(viewContainerRef);
    service.addDynamicComponent();
  }
}
