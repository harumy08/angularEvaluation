import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImagesService } from '../../core/service/images.service';
import { Subscription } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.sass']
})
export class RenderComponent implements OnInit {

  images: any;
  private subscription: Subscription;

  constructor(public imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesCall();
  }

  imagesCall(): void {
    this.subscription = this.imagesService.getImages().subscribe(data => {
        this.images = of(data)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
