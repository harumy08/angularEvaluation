//En este componente recibo la data de la imagen seleccionada
import { Component, OnInit, Inject } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.sass']
})
export class ImageModalComponent implements OnInit {

  public image: Image; //Imagen

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Image//data de mi imagen que viene del componente image-list
  ) {

  }

  ngOnInit(): void {
  }


}
