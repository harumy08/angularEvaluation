import { Injectable } from '@angular/core';
import { Image  } from "../../models/image.model";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

export class ImagesService {

  private imageData: Image[];

  idImage : number = 0;

  private RestUrl = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor(private http: HttpClient) { }

  getImages(page): Observable<Image>{
    return this.http.get<Image>(this.RestUrl);
  }

  selectImage(id: number): void {
    console.log('id',id);
    this.idImage = id;
  }

}
