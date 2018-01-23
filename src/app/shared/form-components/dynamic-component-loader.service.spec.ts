// Inspired by: https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
import { TestBed, inject } from '@angular/core/testing';

import { DynamicComponentLoaderService } from './dynamic-component-loader.service';

describe('DynamicComponentLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicComponentLoaderService]
    });
  });

  it('should be created', inject([DynamicComponentLoaderService], (service: DynamicComponentLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
