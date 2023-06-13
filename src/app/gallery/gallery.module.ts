import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ChildComponent } from './child/child.component';
import { RenderComponent } from './render/render.component';

import { LazyLoadImagesDirective } from '../directives/lazy-load-images.directive';


@NgModule({
  declarations: [
    GalleryComponent,
    ChildComponent,
    RenderComponent,
    LazyLoadImagesDirective
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
