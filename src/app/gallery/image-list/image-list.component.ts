import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ImagesService } from '../../core/service/images.service';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent implements OnInit {

  @Input() images: Image;

  constructor(
    public imagesService: ImagesService,
    private router: Router,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
  }

  openModal(item: any): void {
    console.log(item);
    //this.imagesService.selectImage(id);
    this.dialog.open(ImageModalComponent, {
      data : item,
      panelClass: 'custom-dialog-container'});
  }

}
