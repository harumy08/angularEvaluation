import { Directive, ElementRef } from '@angular/core';

@Directive({ selector:  '[appLazyimg]' })

export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}

//directiva creada para carga perezosa de imagenes
