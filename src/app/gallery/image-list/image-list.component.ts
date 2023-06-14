import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ImagesService } from 'src/app/core/service/images.service';
import { FileUploadService } from 'src/app/core/service/file-upload.service';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent implements OnInit {

  previews: string[] = [];

  @Input() images: Image;


  constructor(
    public imagesService: ImagesService,
    private router: Router,
    public dialog: MatDialog,
    private uploadService: FileUploadService
  ) {

  }

  ngOnInit(): void {
  }


  receiveImage($event) {
    this.previews = $event;
    console.log('ai', this.previews);
  }

  openModal(item: any): void {
    this.dialog.open(ImageModalComponent, {
      data : item,
      panelClass: 'custom-dialog-container'});
  }

}
