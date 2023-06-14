import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { RenderComponent } from './render/render.component';

import { MaterialModule } from './material.module';//Se creo un modulo para cargar los elemntos de material angular que uso
import { ImageModalComponent } from './image-modal/image-modal.component';

import { LazyImgDirective } from '../directives/LazyImgDirective';
import { UploadImageComponent } from './upload-image/upload-image.component';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    GalleryComponent,
    ImageListComponent,
    RenderComponent,
    ImageModalComponent,
    LazyImgDirective,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule,
    NgxSpinnerModule
  ]
})
export class GalleryModule { }

//Cargo los componentes que son del modulo de mi galeria
