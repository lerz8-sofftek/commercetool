import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef, inject } from '@angular/core';
import { MyWidgetComponent } from './app/my-widget/my-widget.component';
import { appConfig } from './app/app.config';

// 🔥 REMOVE Zone.js to prevent conflicts
(window as any).Zone = undefined;

bootstrapApplication(MyWidgetComponent, appConfig).then((applicationRef: ApplicationRef) => {
  const webComponent = createCustomElement(MyWidgetComponent, { injector: applicationRef.injector });
  if (!customElements.get('my-angular-widget')) {
    customElements.define('my-angular-widget', webComponent);
  }
    // ✅ Manually trigger Angular’s change detection if needed
    const appRefInstance = inject(ApplicationRef);
    setInterval(() => appRefInstance.tick(), 1000);
}).catch((err) => console.error('Angular Web Component Error:',err));

