//Componente que me ayuda a subir mis imagenes

import { Component, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from 'src/app/core/service/file-upload.service';//Servicio que se creo para subir imagenes, en caso que exista un api

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.sass']
})
export class UploadImageComponent {

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];// progreso de la subida
  message: string[] = [];// Mensajes de exito

  previews: string[] = [];//Preview de la imagen subida

  @Output() imageEvent = new EventEmitter<any>();//por medio de un evento, envio el valor a su componente padre

  constructor(private uploadService: FileUploadService) {}

  selectFiles(event: any): void {//Funcion que se encarga de subir la imagen al servicio y darme un mensaje de error o exito
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  uploadFiles(): void {//handle por el cual llamo a la funcion que sube la imagen y me muestra preview
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.imageEvent.emit(this.previews);
      }
    }

  }



}
