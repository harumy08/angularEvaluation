import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImagesService } from '../../core/service/images.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.sass']
})
export class RenderComponent implements OnInit {

  images: Image;

  constructor(public imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesCall();
  }

  imagesCall(){
    this.imagesService.getImages().subscribe((data) => {
      this.images = data;
      console.log(this.images);
    });
  }

}
