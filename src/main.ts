import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { MyWidgetComponent } from './app/my-widget/my-widget.component';
import { appConfig } from './app/app.config';

bootstrapApplication(MyWidgetComponent, appConfig).then((applicationRef: ApplicationRef) => {
  const webComponent = createCustomElement(MyWidgetComponent, { injector: applicationRef.injector });
  customElements.define('my-angular-widget', webComponent);
}).catch((err) => console.error(err));


