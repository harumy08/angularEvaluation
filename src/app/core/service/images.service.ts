import { Injectable } from '@angular/core';
import { Image  } from "../../models/image.model";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

export class ImagesService {

  private imageData: Image[];

  idImage : number = 0;

  private RestUrl = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor(private http: HttpClient) { }

  getImages(page): Observable<Image>{//Observable que me entrega lista de imagenes
    return this.http.get<Image>(this.RestUrl);
  }

}
