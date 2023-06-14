import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImagesService } from '../../core/service/images.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.sass']
})
export class RenderComponent implements OnInit {

  images: any;

  private subscription: Subscription;


  public page: Number = 1; //Número de página en la que estamos. Será 1 la primera vez que se carga el componente

  public totalPages: Number; //Número total de páginas

  public numImages: number; //Total de imagenes existentes


  private numResults: number = 10;

  constructor(public imagesService: ImagesService,
    private spinner: NgxSpinnerService) { }

  //Traemos en este hook las imagenes de la primera página de nuestra colección
  ngOnInit(): void {
    this.spinner.show();
    this.getImagesByPage(this.page);
  }

  //Función para pasar de página

  //Esta función se ejecuta cada vez que se desencadena

  //un evento sobre el componente hijo (app-pagination)

  goToPage(page: number){

    this.page = page;

    this.getImagesByPage(page);

  }

  //Este método llama al servicio dónde se obtiene el listado de imagenes

  //Recibe una página concreta


  getImagesByPage(page: Number): void {
    this.subscription = this.imagesService.getImages(page).subscribe(data => {
        this.images = data;
        this.numImages = Object.keys(data).length;
        this.totalPages = Math.round(this.numImages / this.numResults);
        setTimeout(() => {
        this.spinner.hide();
      }, 5000);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
