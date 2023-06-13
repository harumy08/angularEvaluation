import { Injectable } from '@angular/core';
import { Image,GalleryImage } from "../../models/image.model";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

export class ImagesService {

  private imageData: Image[];

  private RestUrl = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image>{
    return this.http.get<Image>(this.RestUrl);
  }

}
