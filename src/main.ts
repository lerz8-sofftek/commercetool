import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, enableProdMode } from '@angular/core';
import { appConfig } from './app/app.config';
import { SimpleButtonComponent } from './app/my-widget/my-widget.component';

enableProdMode(); // Ensure production mode is enabled
bootstrapApplication(SimpleButtonComponent, appConfig).then((applicationRef: ApplicationRef) => {
  const webComponent = createCustomElement(SimpleButtonComponent, { injector: applicationRef.injector });
  if (!customElements.get('my-angular-widget')) {
    customElements.define('custom-element-angular-widget', webComponent);
  }
    
}).catch((err) => console.error('Angular Web Component Error:',err));

