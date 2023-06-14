import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { RenderComponent } from './render/render.component';

import {MaterialModule} from './material.module';
import { ImageModalComponent } from './image-modal/image-modal.component';


@NgModule({
  declarations: [
    GalleryComponent,
    ImageListComponent,
    RenderComponent,
    ImageModalComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule
  ]
})
export class GalleryModule { }
