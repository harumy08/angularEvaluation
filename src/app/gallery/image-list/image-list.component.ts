import { Component, OnInit, Input, EventEmitter, Output, AfterViewChecked } from '@angular/core';
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
export class ImageListComponent  implements OnInit {

  @Input() images: Image;

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

  ngOnInit() {


  }

  ngAfterView() {

  }

  /*fillStudents(page : number) : void {
    var keys = Object.keys(this.images)
    if(Object.keys(this.images).length != 0){
      this.showPagination = false;
     }   setTimeout(() => {
      /** spinner ends after 5 seconds
      this.spinner.hide();
  }, 5000
  }*/

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




  receiveImage($event) {
    this.previews = $event;
  }

  openModal(item: any): void {
    this.dialog.open(ImageModalComponent, {
      data : item,
      panelClass: 'custom-dialog-container'});
  }

}
