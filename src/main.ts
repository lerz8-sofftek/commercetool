import 'zone.js'; // Ensure Zone.js is included
import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyWidgetComponent } from './app/my-widget/my-widget.component';

bootstrapApplication(MyWidgetComponent, {
  providers: [importProvidersFrom(BrowserModule)]
}).then(appRef => {
  const injector = appRef.injector;
  const webComponent = createCustomElement(MyWidgetComponent, { injector });

  if (!customElements.get('my-angular-widget')) {
    customElements.define('my-angular-widget', webComponent);
  }
}).catch(err => console.error('Angular Web Component Error:', err));
