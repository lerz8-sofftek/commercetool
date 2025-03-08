import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, enableProdMode } from '@angular/core';
import { MyWidgetComponent } from './app/my-widget/my-widget.component';
import { appConfig } from './app/app.config';

enableProdMode(); // Ensure production mode is enabled
bootstrapApplication(MyWidgetComponent, appConfig).then((applicationRef: ApplicationRef) => {
  const webComponent = createCustomElement(MyWidgetComponent, { injector: applicationRef.injector });
  if (!customElements.get('my-angular-widget')) {
    customElements.define('custom-element-angular-widget', webComponent);
  }
    
}).catch((err) => console.error('Angular Web Component Error:',err));

