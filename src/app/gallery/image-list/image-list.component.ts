import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ImagesService } from 'src/app/core/service/images.service';
import { FileUploadService } from 'src/app/core/service/file-upload.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent  {

  @Input() images: Image; //images que recibo de componente padre

  //Parametros que recibo del paginado

  @Input() private page: number;

  @Input() private totalPages: number;

  @Input() public numImages: number;

  @Output() paginaEmitter: EventEmitter<number> =  new EventEmitter();



  previews: string[] = [];

  constructor(
    public imagesService: ImagesService,
    private router: Router,
    public dialog: MatDialog,
    private uploadService: FileUploadService
  ) {
  }

  //funciones para paginacion
  siguiente(){

    this.page++;

    this.pasarPagina();

  }

  anterior(){

    this.page--;

    this.pasarPagina();

  }

  pasarPagina(){

    this.paginaEmitter.emit(this.page);

  }


//Funcion que me permite recivir la imagen subida del componente hijo, por un evento

  receiveImage($event) {
    this.previews = $event;
  }

  //Funcion donde invoco al modal y envio la data del objeto
  openModal(item: any): void {
    this.dialog.open(ImageModalComponent, {
      data : item,
      panelClass: 'custom-dialog-container'});
  }

}
