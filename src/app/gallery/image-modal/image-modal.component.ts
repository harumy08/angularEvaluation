import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Image } from 'src/app/models/image.model';
import { ImagesService } from '../../core/service/images.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.sass']
})
export class ImageModalComponent implements OnInit {

  public image: Image;
  private subscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {

  }

  ngOnInit(): void {
  }

  changeImg(move: number): void {
    const position = this.data.id + move;
  }


}
