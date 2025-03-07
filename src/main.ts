import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';


bootstrapApplication(AppComponent, appConfig).then(appRef => {
  const injector = appRef.injector; 
  const webComponent = createCustomElement(AppComponent, { injector });
  customElements.define('custom-angular-widget', webComponent);});