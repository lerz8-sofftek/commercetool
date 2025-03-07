import 'zone.js/dist/zone'; // Import Zone.js manually
import { createCustomElement } from '@angular/elements';
import { importProvidersFrom, ApplicationRef, inject } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MyWidgetComponent } from './app/my-widget/my-widget.component';

// Disable Zone.js to avoid conflicts
(window as any).Zone = undefined;

bootstrapApplication(MyWidgetComponent, {
  providers: [importProvidersFrom(BrowserModule)]
}).then(appRef => {
  const injector = appRef.injector;
  const webComponent = createCustomElement(MyWidgetComponent, { injector });

  if (!customElements.get('my-angular-widget')) {
    customElements.define('my-angular-widget', webComponent);
  }

  // Ensure Angular's change detection runs only when needed
  const appRefInstance = inject(ApplicationRef);
  setInterval(() => appRefInstance.tick(), 1000);
}).catch(err => console.error('Angular Web Component Error:', err));
